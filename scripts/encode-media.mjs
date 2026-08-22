#!/usr/bin/env node
/**
 * Re-encode the homepage background videos for the web, and cut their posters.
 *
 *   node scripts/encode-media.mjs                          # all three
 *   node scripts/encode-media.mjs nl_lead_recovery_review  # just one
 *   node scripts/encode-media.mjs --src some/other/dir     # different source
 *
 * The masters are 2560x1440 H.264 with a ~130 kb/s AAC track on videos that are
 * always muted, so the wins are the 720p downscale, the CRF, and dropping the
 * dead audio. Output lands in public/.
 *
 * Masters live in ./media-src (gitignored — 17MB, never served). If they are
 * missing, recover them from git:
 *
 *   mkdir -p media-src && for v in nl_monogram_hero nl_custom_architecture_frame nl_lead_recovery_review; do \
 *     git show a698370:public/$v.mp4 > media-src/$v.mp4; done
 *
 * Always encode from the master. Re-encoding an already-encoded 720p file bakes
 * in whatever the previous pass quantised away and adds generation loss on top;
 * raising quality on a degraded source cannot recover detail that is already gone.
 *
 * Notes on the settings, so they are not re-litigated:
 *  - CRF is per clip, not global. See VIDEOS below for why.
 *  - No fps change. The masters are 24fps already; raising them adds bytes.
 *  - No WebM/VP9 source. Measured on this content VP9 lost decisively — at a
 *    matched ~850KB it scored SSIM 0.962 against x264's 0.985.
 *  - No duration trim. None of the clips loops cleanly (end-vs-start frame RMSE
 *    40-83) and none has a static tail worth cutting; they are build-on
 *    animations that resolve, which is why they play once and hold.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';

/**
 * Lower CRF is better quality and more bytes.
 */
const VIDEOS = {
  // Flat, high-contrast chrome on near-black. Compresses cleanly at 30.
  nl_monogram_hero: { crf: 30 },

  // Mostly hard-edged UI panels. Also fine at 30.
  nl_custom_architecture_frame: { crf: 30 },

  // CRF 24, not 30. This clip resolves to the "Lead Recovered" five-star payoff
  // over large near-black gradients with fine light streaks — exactly the content
  // that bands and smears under aggressive quantisation, and at 30 it visibly did.
  // It is the video the section's whole argument rests on, so it gets the bitrate:
  // 824KB -> 1865KB, SSIM 0.9854 -> 0.9919, still a 78% cut from the master.
  // The extra ~1MB is worth it here and would be wasted on the other two.
  nl_lead_recovery_review: { crf: 24 },
};

const OUT_DIR = 'public';

const argv = process.argv.slice(2);
const srcFlag = argv.indexOf('--src');
const SRC_DIR = srcFlag !== -1 ? argv[srcFlag + 1] : 'media-src';
const only = argv.filter((a, i) => !a.startsWith('--') && i !== srcFlag + 1);
const targets = only.length ? only : Object.keys(VIDEOS);

if (!existsSync(SRC_DIR)) {
  console.error(`Missing ${SRC_DIR}/ — see the recovery command at the top of this file.`);
  process.exit(1);
}
mkdirSync(OUT_DIR, { recursive: true });

const run = (args) => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', ...args]);
const mb = (p) => (statSync(p).size / 1048576).toFixed(2);
const kb = (p) => (statSync(p).size / 1024).toFixed(0);

for (const name of targets) {
  const cfg = VIDEOS[name];
  if (!cfg) {
    console.error(`Unknown video: ${name}`);
    process.exit(1);
  }

  const src = path.join(SRC_DIR, `${name}.mp4`);
  if (!existsSync(src)) {
    console.error(`Missing master: ${src}`);
    process.exit(1);
  }

  const out = path.join(OUT_DIR, `${name}.mp4`);
  const poster = path.join(OUT_DIR, `${name}-poster.webp`);

  run([
    '-i', src,
    '-vf', 'scale=-2:720',
    '-c:v', 'libx264', '-profile:v', 'high', '-crf', String(cfg.crf), '-preset', 'slow',
    '-pix_fmt', 'yuv420p',
    '-an',                      // muted in every player — the AAC track is dead weight
    '-movflags', '+faststart',  // moov atom first, so playback starts while downloading
    out, '-y',
  ]);

  // Poster: first frame, placeholder-grade — it is only shown until the video
  // has enough data to paint, and for the deferred clips until they load.
  run([
    '-i', src,
    '-vf', 'scale=-2:720',
    '-frames:v', '1',
    '-f', 'image2', '-c:v', 'libwebp', '-quality', '62',
    poster, '-y',
  ]);

  console.log(
    `${name.padEnd(30)} ${mb(src)}MB → ${kb(out).padStart(5)}KB @ crf${cfg.crf}` +
    `   poster ${kb(poster).padStart(3)}KB`
  );
}

/**
 * Re-encodes the homepage videos from their 1440p masters into the 720p files
 * that actually ship, and pulls a poster frame for each.
 *
 * Masters live in ./media-src (gitignored — they are 17MB and never served).
 * If they are missing, recover them from git:
 *
 *   mkdir -p media-src && for v in nl_monogram_hero nl_custom_architecture_frame nl_lead_recovery_review; do \
 *     git show a698370:public/$v.mp4 > media-src/$v.mp4; done
 *
 * Always encode from the master. Re-encoding an already-encoded 720p file bakes
 * in whatever the previous pass quantised away and adds generation loss on top;
 * raising CRF on a degraded source cannot recover detail that is already gone.
 *
 *   node encode-media.mjs                        # all three
 *   node encode-media.mjs nl_lead_recovery_review  # just one
 */

import { execFileSync } from 'node:child_process';
import { existsSync, statSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';

const SRC_DIR = 'media-src';
const OUT_DIR = 'public';

/**
 * Per-file CRF. Lower is better quality and more bytes.
 *
 * The masters are 2560x1440 at ~5-7.5 Mbps with a stereo AAC track on muted,
 * autoplaying video — so the wins are the 720p downscale, the CRF, and dropping
 * the dead audio. All three are 24fps natively and stay there.
 */
const VIDEOS = {
  // Flat, high-contrast chrome on near-black. Compresses cleanly at 30.
  nl_monogram_hero: { crf: 30 },

  // Mostly hard-edged UI panels. Also fine at 30.
  nl_custom_architecture_frame: { crf: 30 },

  // CRF 24, not 30. This clip resolves to the "Lead Recovered" five-star payoff
  // over large near-black gradients with fine light streaks — exactly the content
  // that bands and smears under aggressive quantisation, and at 30 it visibly did.
  // It is the video the section's whole argument rests on, so it gets the bitrate.
  // The extra ~1MB is worth it here and would be wasted on the other two.
  nl_lead_recovery_review: { crf: 24 },
};

const run = (args) => execFileSync(ffmpeg, args, { stdio: ['ignore', 'ignore', 'pipe'] });
const mb = (p) => (statSync(p).size / 1048576).toFixed(2);
const kb = (p) => (statSync(p).size / 1024).toFixed(0);

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const targets = only.length ? only : Object.keys(VIDEOS);

if (!existsSync(SRC_DIR)) {
  console.error(`Missing ${SRC_DIR}/ — see the recovery command at the top of this file.`);
  process.exit(1);
}
mkdirSync(OUT_DIR, { recursive: true });

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
    '-hide_banner', '-loglevel', 'error', '-i', src,
    '-vf', 'scale=-2:720',
    '-c:v', 'libx264',
    '-profile:v', 'high',
    '-crf', String(cfg.crf),
    '-preset', 'slow',
    '-pix_fmt', 'yuv420p',
    '-an',                      // muted in every player — the AAC track is dead weight
    '-movflags', '+faststart',  // moov atom first, so playback can start while downloading
    out, '-y',
  ]);

  // Poster is frame one: a placeholder that holds the frame until the video is ready.
  run([
    '-hide_banner', '-loglevel', 'error', '-i', src,
    '-vf', 'scale=-2:720', '-frames:v', '1',
    '-f', 'image2', '-c:v', 'libwebp', '-quality', '62',
    poster, '-y',
  ]);

  console.log(
    `${name.padEnd(30)} ${mb(src)}MB → ${kb(out).padStart(5)}KB @ crf${cfg.crf}` +
    `   poster ${kb(poster).padStart(3)}KB`
  );
}

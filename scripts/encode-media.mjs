#!/usr/bin/env node
/**
 * Re-encode the homepage background videos for the web, and cut their posters.
 *
 *   node scripts/encode-media.mjs <source-dir> [output-dir]
 *
 * The masters are 2560x1440 H.264 with a ~130 kb/s AAC track on videos that are
 * always muted. This drops them to 720p, strips the audio, and re-encodes at
 * CRF 30 — roughly a 90% saving with no visible loss behind the text overlays.
 *
 * The pre-optimisation masters are not in the working tree. Recover them with:
 *   git show a698370:public/nl_monogram_hero.mp4 > nl_monogram_hero.mp4
 *
 * Notes on the settings, so they are not re-litigated:
 *  - CRF 30, not 28. Measured SSIM 0.9854 vs 0.9880, for ~25% fewer bytes.
 *  - No fps change. The masters are 24fps already; raising them adds bytes.
 *  - No WebM/VP9 source. Measured on this content VP9 lost decisively —
 *    at a matched ~850KB it scored SSIM 0.962 against x264's 0.985.
 *  - No duration trim. None of the clips loop cleanly and none has a static
 *    tail worth cutting; they are build-on animations that resolve.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';

const CLIPS = [
  'nl_monogram_hero',
  'nl_custom_architecture_frame',
  'nl_lead_recovery_review',
];

const srcDir = process.argv[2];
const outDir = process.argv[3] ?? 'public';

if (!srcDir) {
  console.error('usage: node scripts/encode-media.mjs <source-dir> [output-dir]');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

const run = (args) => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', ...args]);

for (const name of CLIPS) {
  const src = path.join(srcDir, `${name}.mp4`);
  if (!existsSync(src)) {
    console.error(`skip ${name}: ${src} not found`);
    continue;
  }

  run([
    '-i', src,
    '-vf', 'scale=-2:720',
    '-c:v', 'libx264', '-profile:v', 'high', '-crf', '30', '-preset', 'slow',
    '-pix_fmt', 'yuv420p',
    '-an',
    '-movflags', '+faststart',
    path.join(outDir, `${name}.mp4`), '-y',
  ]);

  // Poster: first frame, placeholder-grade — it is only shown until the video
  // has enough data to paint, and for the deferred clips until they load.
  run([
    '-i', src,
    '-vf', 'scale=-2:720',
    '-frames:v', '1',
    '-f', 'image2', '-c:v', 'libwebp', '-quality', '62',
    path.join(outDir, `${name}-poster.webp`), '-y',
  ]);

  console.log(`encoded ${name}`);
}

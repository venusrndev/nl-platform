/**
 * Renders the Open Graph cards from scripts/og/template.html. 28 Sep 2026.
 *
 *   node scripts/render-og.mjs
 *
 * Headless Chrome (macOS path below) screenshots the template at 1200x630 and
 * sharp encodes it as JPEG q88. Copy is Andy's, word for word. No phone numbers.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TEMPLATE = path.resolve('scripts/og/template.html');

const CARDS = [
  // Homepage and the four trade pages
  { out: 'public/og-image.jpg', h: "Every call answered. Even when you can't.", s: 'Next League · Riverside, CA' },
  // /multi-site only
  { out: 'public/og-multi-site.jpg', h: 'One number that answers for every location.', s: 'Next League' },
];

const tmp = mkdtempSync(path.join(tmpdir(), 'og-'));

for (const card of CARDS) {
  const url = new URL(pathToFileURL(TEMPLATE));
  url.searchParams.set('h', card.h);
  url.searchParams.set('s', card.s);
  const png = path.join(tmp, path.basename(card.out, '.jpg') + '.png');

  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1200,630',
    '--allow-file-access-from-files', '--virtual-time-budget=15000',
    `--screenshot=${png}`, url.href,
  ], { stdio: 'ignore' });

  const info = await sharp(png).resize(1200, 630).jpeg({ quality: 88 }).toFile(card.out);
  console.log(`${card.out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}

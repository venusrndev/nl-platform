/**
 * Puts the site header and footer into the static pages in dist/.
 * Runs as part of `npm run build`.
 *
 * 7 Oct 2026: one header and footer across the site. The React pages render
 * src/components/Navbar.jsx and Footer.jsx; the static pages carry the markers
 * <!-- site-header --> and <!-- site-footer -->, replaced here with
 * src/chrome/header.html and footer.html (styles: public/site-chrome.css).
 * A page missing a marker fails the build rather than shipping without one.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = ['hvac', 'plumbing', 'electrical', 'roofing', 'multi-site'];

const read = (p) => fs.readFileSync(path.join(root, p), 'utf-8');
const header = read('src/chrome/header.html').trim();
const footer = read('src/chrome/footer.html').trim().replace('{{YEAR}}', String(new Date().getFullYear()));

for (const page of PAGES) {
  const file = path.join(root, 'dist', `${page}.html`);
  let html = fs.readFileSync(file, 'utf-8');
  for (const marker of ['<!-- site-header -->', '<!-- site-footer -->']) {
    if (html.split(marker).length !== 2) {
      throw new Error(`build-static-chrome: ${page}.html needs exactly one ${marker}`);
    }
  }
  html = html
    .replace('<!-- site-header -->', () => header)
    .replace('<!-- site-footer -->', () => footer);
  fs.writeFileSync(file, html);
  console.log(`Chrome: dist/${page}.html`);
}

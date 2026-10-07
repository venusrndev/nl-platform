import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

// 7 Oct 2026 (site pass, item 4): /missed-call-text-back, /speed-to-lead and
// /riverside are gone; vercel.json 301s them to /.
const routesToPrerender = [
  '/',
  '/free-audit',
  '/text-us',
];

// 28 Sep 2026: every route used to ship index.html's (homepage) <head>.
// The helmet-context block that stood here never ran: on React 19,
// react-helmet-async 3 leaves the context empty, and React itself emits each
// page's <title>, <meta> and <link> tags at the very start of renderToString's
// output instead — so they landed inside #root, where crawlers ignore them,
// and once the JS ran the head held two titles and two descriptions.
// Now that leading block is lifted into <head> in place of index.html's
// defaults. On the client React finds the same tags in <head> and reuses them.
const LEADING_HEAD_TAG = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)/;
const DEFAULT_HEAD_TAG =
  /[ \t]*(?:<!-- (?:Open Graph|Twitter Card) -->|<title>[\s\S]*?<\/title>|<meta\s+(?:name|property)="(?:description|keywords|og:[^"]+|twitter:[^"]+)"[^>]*>|<link\s+rel="canonical"[^>]*>)[ \t]*\n/g;

function splitLeadingHeadTags(html) {
  const tags = [];
  let rest = html;
  for (let m = rest.match(LEADING_HEAD_TAG); m; m = rest.match(LEADING_HEAD_TAG)) {
    tags.push(m[0]);
    rest = rest.slice(m[0].length);
  }
  return { tags, rest };
}

(async () => {
  for (const url of routesToPrerender) {
    const { html } = render(url);
    const { tags, rest } = splitLeadingHeadTags(html);

    if (!tags.some((t) => t.startsWith('<title>'))) {
      throw new Error(`Prerender: ${url} rendered no <title>`);
    }

    const pageHtml = template
      .replace(/<title>[\s\S]*?<\/title>/i, '<!--route-head-->')
      .replace(DEFAULT_HEAD_TAG, '')
      .replace(/\n(?:[ \t]*\n){2,}/g, '\n\n')
      .replace('<!--route-head-->', () => tags.join('\n    '))
      .replace('<div id="root"></div>', () => `<div id="root">${rest}</div>`);

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
    const dirPath = path.dirname(toAbsolute(filePath));

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), pageHtml);
    console.log('Pre-rendered:', filePath);
  }
})();

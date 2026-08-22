import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  '/',
  '/missed-call-text-back',
  '/speed-to-lead',
  '/riverside',
  '/free-audit',
  '/text-us',
];

(async () => {
  for (const url of routesToPrerender) {
    const { html, helmet } = render(url);

    let pageHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (helmet) {
      const titleStr = helmet.title ? helmet.title.toString() : '';
      const metaStr = helmet.meta ? helmet.meta.toString() : '';
      const linkStr = helmet.link ? helmet.link.toString() : '';
      const scriptStr = helmet.script ? helmet.script.toString() : '';

      if (titleStr) {
        pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, titleStr);
      }
      const injectedTags = [metaStr, linkStr, scriptStr].filter(Boolean).join('\n');
      if (injectedTags) {
        pageHtml = pageHtml.replace('</head>', `${injectedTags}\n</head>`);
      }
    }

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
    const dirPath = path.dirname(toAbsolute(filePath));

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), pageHtml);
    console.log('Pre-rendered:', filePath);
  }
})();

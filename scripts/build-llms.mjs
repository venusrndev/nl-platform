/**
 * Writes dist/llms.txt — a plain summary of the business for AI crawlers
 * (llmstxt.org). Runs at the end of `npm run build`.
 *
 * 28 Sep 2026: every sentence in scripts/llms/llms.template.md is already on
 * the site (homepage and page meta descriptions). The plans are filled in
 * here from src/constants/pricing.js so prices still live in one place. The
 * pricing notes are left out on purpose: the guarantee appears once, and the
 * Custom line is the one sanctioned place for its wording.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PLANS } from '../src/constants/pricing.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const plans = PLANS.map((plan) =>
  [
    `### ${plan.name}: ${plan.price} ${plan.period}`,
    '',
    plan.tagline,
    ...(plan.leadIn ? ['', plan.leadIn] : []),
    '',
    ...plan.features.map((f) => `- ${f}`),
  ].join('\n'),
).join('\n\n');

const template = fs.readFileSync(path.join(root, 'scripts/llms/llms.template.md'), 'utf-8');
fs.writeFileSync(path.join(root, 'dist/llms.txt'), template.replace('{{PLANS}}', () => plans));
console.log('Wrote: dist/llms.txt');

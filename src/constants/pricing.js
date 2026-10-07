/**
 * Plans and prices — the single source for the React app.
 *
 * Confirmed 28 Sep 2026. Copy is final and used word for word.
 *
 * Prices appear in five places: the homepage pricing section (reads this file)
 * and the pricing blocks on the four static trade pages, public/{hvac,plumbing,
 * electrical,roofing}.html, which have no build step and so carry a hand copy.
 * If anything here changes, change those four pages in the same commit — they
 * must match this file exactly.
 *
 * 28 Sep 2026: two more places are built from this file, so there is nothing
 * to hand-edit in either: the homepage's Offer structured data (Pricing.jsx)
 * and /llms.txt (scripts/build-llms.mjs, run by `npm run build`).
 *
 * 7 Oct 2026: the plan buttons read "Book a 15-minute call", the one label for
 * the audit action everywhere (site pass, item 7). Trade pages match.
 */

export const PLANS = [
  {
    id: 'catch',
    name: 'Catch',
    price: '$297',
    period: '/ month',
    tagline: 'For when nothing can slip through.',
    leadIn: null,
    features: [
      'Missed-call text-back from your business number',
      'Instant text and email reply to web forms',
      'One inbox for texts, email, Facebook and Instagram',
      'Online booking with automatic reminders',
      'Business texting registration filed for you',
    ],
    cta: 'Book a 15-minute call',
  },
  {
    id: 'answer',
    name: 'Answer',
    price: '$497',
    period: '/ month',
    tagline: 'For when you want the phone picked up.',
    leadIn: 'Everything in Catch, plus:',
    features: [
      "An AI receptionist answers the calls you can't, 24/7",
      'Books right onto your calendar',
      'A text summary of every call it takes',
      "Up to 500 AI minutes a month, about 150 calls. Past that, calls fall back to text-back, so there's no surprise bill.",
    ],
    cta: 'Book a 15-minute call',
  },
];

// The three short lines under the plan cards.
export const PRICING_NOTES = [
  {
    label: 'Guarantee',
    text: "Run it for a month. If it hasn't landed you a job you would have missed, cancel. You're out one month, and that's it.",
  },
  {
    label: 'Timing',
    text: 'Built in a week. Live the moment carrier registration clears.',
  },
  // 28 Sep 2026 (Andy): this is the one place "quote follow-ups" and
  // "seasonal campaigns" may appear, because it says they are built to order.
  // It is exempt from the banned-terms check; everywhere else stays at zero.
  // 7 Oct 2026 (language pass): now "estimate follow-up" and "multiple
  // locations"; the exemption carries over to the new wording.
  {
    label: 'Custom',
    text: 'Need estimate follow-up, seasonal campaigns, or multiple locations? We build those to order.',
    link: 'Talk to us →',
  },
];

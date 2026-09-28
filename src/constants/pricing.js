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
      'Texting registration filed for you',
    ],
    cta: 'Book a call',
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
      'Books straight into your calendar',
      'A text summary of every call it takes',
      "Up to 500 AI minutes a month, about 150 calls. Past that, calls fall back to text-back, so there's no surprise bill.",
    ],
    cta: 'Book a call',
  },
];

// The three short lines under the plan cards.
export const PRICING_NOTES = [
  {
    label: 'Guarantee',
    text: "Run it for a month. If it hasn't caught you a job you'd otherwise have missed, cancel. You've paid for one month and that's all.",
  },
  {
    label: 'Timing',
    text: 'Built in a week. Live the moment carrier registration clears.',
  },
  {
    label: 'Custom',
    text: 'Need quote follow-ups, seasonal campaigns or several locations? We build those to order.',
    link: 'Talk to us →',
  },
];

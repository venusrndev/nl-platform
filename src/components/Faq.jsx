import React, { useState, useId } from 'react';

/**
 * FAQ. Layout reference: Amigo, Mobbin section b24bb61d — small heading on the
 * left, accordion on the right, thin dividers, one answer open at a time.
 *
 * Closed answers use the `hidden` attribute rather than being unmounted, so
 * every answer is in the prerendered HTML for crawlers and no-JS readers.
 * Questions and answers are final (brief, 28 Sep 2026).
 */
const FAQS = [
  {
    q: "Will my customers know it's AI?",
    a: "Yes. It introduces itself as your business's automated assistant, and anyone who'd rather talk to you can ask for a callback.",
  },
  {
    q: 'What if it says something wrong?',
    a: "It only works from what you've approved: your services, hours, service area and calendar. It won't give estimates or promise anything outside that. Every call is recorded and summarized, so you can check any of them.",
  },
  {
    q: 'Does it work with ServiceTitan, Jobber or Housecall Pro?',
    a: 'Keep whatever you dispatch on. We sit in front of it, catch the calls that never make it that far, and hand you the booked job.',
  },
  {
    q: 'Do I have to change my phone number?',
    a: "No. You keep your number and set it to forward calls you don't answer to the line we set up. It takes a few minutes on most phones.",
  },
  {
    q: 'Is there a contract?',
    a: "No. It's month to month, with no setup fee.",
  },
  {
    q: 'Why not just buy a cheap AI answering app?',
    a: "You can, and some cost about $50 a month. Then you'd set it up, write the scripts, register your texting and fix it when it breaks. We do all of that for you, and there's a person in Riverside you can call.",
  },
];

// 28 Sep 2026: the same questions and answers as FAQPage structured data,
// built from FAQS so the markup and the page can't drift apart.
const FAQ_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}).replace(/</g, '\\u003c');

const Chevron = ({ open }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 text-[#9ca3af] transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Faq = () => {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05]">
            Questions
          </h2>
        </div>

        <div className="lg:col-span-8 border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div key={item.q} className="border-b border-[color:var(--line,rgba(255,255,255,0.10))]">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full min-h-11 flex items-center justify-between gap-4 py-5 text-left font-ui text-base font-semibold text-[#f3f4f6] hover:text-emerald-400 transition-colors"
                  >
                    {item.q}
                    <Chevron open={isOpen} />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
                  <p className="font-ui text-sm sm:text-base text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed pb-6 pr-8">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

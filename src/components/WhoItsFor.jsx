import React from 'react';

/**
 * "Who it's for." Layout reference: Spade, Mobbin section 24be4dcb —
 * heading on the left, two tall cards on the right, each with a small label,
 * a headline, one line and a link.
 *
 * The trade and multi-site pages are static HTML outside the React router, so
 * these are plain anchors: a full page load, which is what serves them.
 */
const CARDS = [
  {
    label: 'Trades',
    headline: 'Home service contractors',
    line: "HVAC, plumbing, electrical and roofing. You're on the job when the call comes in, and the next company on the list picks up.",
    links: [
      { label: 'HVAC', href: '/hvac' },
      { label: 'Plumbing', href: '/plumbing' },
      { label: 'Electrical', href: '/electrical' },
      { label: 'Roofing', href: '/roofing' },
    ],
  },
  {
    label: 'Multi-site',
    headline: 'Car wash, fuel and convenience operators',
    line: 'Lots of locations and nobody free to answer the phone. One line that answers for every site, logs each call as a case and gets it to the right person.',
    links: [{ label: 'See how it works', href: '/multi-site' }],
  },
];

const Arrow = () => (
  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const WhoItsFor = () => {
  return (
    <section id="industries" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow mb-3 block">Who it's for</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05]">
            If your phone is your cash register, this is for you.
          </h2>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map((card) => (
            <article key={card.label} className="panel p-6 sm:p-8 flex flex-col min-h-80">
              <span className="eyebrow text-emerald-400">{card.label}</span>
              <h3 className="font-headline text-2xl font-bold text-[#f3f4f6] mt-auto pt-10 leading-tight">
                {card.headline}
              </h3>
              <p className="font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed mt-3">
                {card.line}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
                {card.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 min-h-11 font-ui text-xs font-semibold uppercase tracking-[0.15em] text-[#f3f4f6] hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;

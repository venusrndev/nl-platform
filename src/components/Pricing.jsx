import React from 'react';
import { PLANS, PRICING_NOTES } from '../constants/pricing';

/**
 * Pricing. Layout reference: Figma, Mobbin section f361a24d — two plan cards
 * side by side, price top-right, "Everything in X, plus", button bottom-right.
 * All plan copy and prices come from src/constants/pricing.js.
 */

// 28 Sep 2026: the plans as structured data (Offer per plan, monthly), built
// from pricing.js so prices still live in one place. Provider is the
// LocalBusiness node in index.html.
const PRICING_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI phone answering and missed-call text-back',
  provider: { '@id': 'https://nextleaguemarketing.com/#organization' },
  offers: PLANS.map((plan) => {
    const price = plan.price.replace('$', '');
    return {
      '@type': 'Offer',
      name: plan.name,
      description: [plan.tagline, plan.leadIn, plan.features.join('; ')].filter(Boolean).join(' '),
      price,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency: 'USD',
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      },
      url: 'https://nextleaguemarketing.com/#pricing',
    };
  }),
}).replace(/</g, '\\u003c');

const Tick = () => (
  <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const Pricing = () => {
  return (
    <section id="pricing" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: PRICING_JSON_LD }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="eyebrow mb-3">Pricing</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center mb-6">
            Two plans. No setup fee. No contract.
          </h2>
          <p className="font-ui text-base sm:text-lg text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed">
            Priced against one job, not your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PLANS.map((plan) => (
            <article key={plan.id} className="panel p-6 sm:p-8 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-headline text-3xl font-bold text-[#f3f4f6]">{plan.name}</h3>
                <p className="text-right whitespace-nowrap">
                  <span className="font-headline text-3xl font-bold text-[#f3f4f6]">{plan.price}</span>
                  <span className="font-ui text-sm text-[#9ca3af] font-light"> {plan.period}</span>
                </p>
              </div>
              <p className="font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light mt-3 pb-6 border-b border-[color:var(--line,rgba(255,255,255,0.10))]">
                {plan.tagline}
              </p>

              {plan.leadIn && (
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-[#f3f4f6] mt-6">
                  {plan.leadIn}
                </p>
              )}
              <ul className="space-y-3 mt-5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed">
                    <Tick />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#audit" className="btn btn-primary mt-auto self-end">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <dl className="mt-10 space-y-4 max-w-3xl mx-auto">
          {PRICING_NOTES.map((note) => (
            <div key={note.label} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <dt className="eyebrow sm:w-28 sm:flex-shrink-0 sm:pt-1">{note.label}</dt>
              <dd className="font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed">
                {note.text}
                {note.link && (
                  <>
                    {' '}
                    <a href="#audit" className="text-emerald-400 hover:text-[#34d399] font-semibold transition-colors whitespace-nowrap">
                      {note.link}
                    </a>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Pricing;

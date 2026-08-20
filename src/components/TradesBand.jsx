import React from 'react';

const TRADES = [
  { label: 'HVAC', href: '/hvac' },
  { label: 'Plumbing', href: '/plumbing' },
  { label: 'Electrical', href: '/electrical' },
  { label: 'Roofing', href: '/roofing' },
];

export const TradesBand = () => {
  return (
    <section id="trades-band" className="py-8 sm:py-10 bg-[#14161b] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="font-ui text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#f3f4f6] mb-4 w-full">
          BUILT FOR THE TRADES
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
          {TRADES.map((trade) => (
            <a
              key={trade.href}
              href={trade.href}
              rel="external"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = trade.href;
              }}
              className="btn btn-sm btn-secondary cursor-pointer"
            >
              {trade.label}
            </a>
          ))}
        </div>
        <div className="font-ui text-sm text-slate-400 font-light italic text-center w-full">
          If your phone is your cash register, this is for you.
        </div>
      </div>
    </section>
  );
};

export default TradesBand;

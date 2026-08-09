import React from 'react';

const ITEMS = [
  'Responds in 15 seconds',
  'Missed-call text-back',
  '2-way SMS inbox',
  'Riverside, CA',
  'Automated review requests',
  'Speed-to-lead system',
];

export const TickerBar = () => {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const marquee = [...ITEMS, ...ITEMS];

  return (
    <div className="w-full py-4 bg-[#14161b] border-y border-white/10 overflow-hidden relative z-20">
      <div className="animate-ticker text-[11px] sm:text-xs font-ui font-semibold uppercase tracking-[0.28em] text-slate-400">
        {marquee.map((item, idx) => (
          <span key={idx} className="flex items-center">
            <span className="mx-7">{item}</span>
            <span className="text-emerald-500/60">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;

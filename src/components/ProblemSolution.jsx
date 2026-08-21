import React, { useState } from 'react';
import VideoContainer from './VideoContainer';

const COMPARISON = {
  today: {
    label: 'How it works today',
    rows: [
      ['Call comes in while you\'re on a job', 'Goes to voicemail'],
      ['Web form submitted at 8pm', 'Seen tomorrow morning'],
      ['Typical first reply', '4+ hours later'],
    ],
    footnote: 'By the time you call back, they\'ve already booked someone else.',
  },
  withUs: {
    label: 'With Next League',
    rows: [
      ['Call comes in while you\'re on a job', 'Auto-text in 15 seconds'],
      ['Web form submitted at 8pm', 'SMS + email in 15 seconds'],
      ['Typical first reply', 'Under 1 minute, 24/7'],
    ],
    footnote: 'You\'re the first callback they get — so you\'re the one they hire.',
  },
};

export const ProblemSolution = () => {
  const [active, setActive] = useState('withUs');
  const data = COMPARISON[active];

  return (
    <section id="problem-solution" className="py-16 sm:py-20 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">The real problem</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Faster beats better.<br />
            <span className="text-gradient-silver inline-block">Every time.</span>
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            A homeowner with a dead AC calls three companies. They hire the first
            one that picks up — not the best one. If your reply takes an hour, the
            job was decided in the first five minutes. That's not a marketing
            problem. It's a response-time problem, and it's fixable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10">
            <VideoContainer
              src="/nl_custom_architecture_frame.mp4"
              poster="/nl_custom_architecture_frame-poster.webp"
              aspectRatio="aspect-video"
              showBorder={false}
            />
          </div>

          {/* Comparison Panel */}
          <div className="lg:col-span-5">
            <div className="panel p-6 sm:p-8 space-y-6">
              <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide border-b border-white/10 pb-4 text-center">
                The first five minutes
              </h3>

              {/* Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#0c0d10] rounded-xl border border-white/10">
                <button
                  onClick={() => setActive('today')}
                  className={`py-3 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    active === 'today'
                      ? 'bg-[#1a1d24] text-[#f3f4f6] border border-white/15'
                      : 'text-slate-400 hover:text-[#f3f4f6]'
                  }`}
                >
                  Right now
                </button>

                <button
                  onClick={() => setActive('withUs')}
                  className={`py-3 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    active === 'withUs'
                      ? 'bg-[#1a1d24] text-emerald-400 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-[#f3f4f6]'
                  }`}
                >
                  With us
                </button>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {data.rows.map(([scenario, outcome]) => (
                  <div key={scenario} className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="font-ui text-xs text-slate-400 font-light leading-snug max-w-[55%]">
                      {scenario}
                    </span>
                    <strong
                      className={`font-ui text-xs font-bold text-right leading-snug ${
                        active === 'withUs' ? 'text-emerald-400' : 'text-slate-200'
                      }`}
                    >
                      {outcome}
                    </strong>
                  </div>
                ))}
              </div>

              <p className="font-ui text-xs text-slate-400 font-light leading-relaxed pt-1">
                {data.footnote}
              </p>

              <a
                href="#audit-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', '#audit-form');
                }}
                className="btn btn-primary w-full cursor-pointer"
              >
                Fix my response time
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

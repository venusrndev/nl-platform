import React from 'react';
import VideoContainer from './VideoContainer';

// "The first five minutes." Rows are final (brief, 28 Sep 2026).
// 28 Sep 2026: was a Right now / With us toggle showing one column at a time;
// now both columns side by side, matching the table as briefed.
const ROWS = [
  ['A call comes in while you\'re on a job', 'Rings out', 'Answered by AI, or a text within seconds'],
  ['A web form comes in at 8pm', 'Seen tomorrow', 'Text and email back in under a minute'],
  ['Typical first reply', 'Hours', 'Under a minute, day or night'],
];

export const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="scroll-mt-20 py-16 sm:py-20 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">The real problem</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Faster beats better.<br />
            <span className="text-gradient-silver inline-block">Every time.</span>
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            A homeowner with a dead AC calls three companies and hires the first
            one that picks up. Most people who reach voicemail don't leave a
            message. They try the next name on the list.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10">
            <VideoContainer
              src="/nl_custom_architecture_frame.mp4"
              poster="/nl_custom_architecture_frame-poster.webp"
              aspectRatio="aspect-video"
              showBorder={false}
            />
          </div>

          {/* Comparison table */}
          <div className="lg:col-span-6">
            <div className="panel p-6 sm:p-8">
              <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide border-b border-white/10 pb-4 mb-2 text-center">
                The first five minutes
              </h3>

              <table className="w-full font-ui text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="py-3 pr-3 text-left font-normal"><span className="sr-only">Situation</span></th>
                    <th scope="col" className="py-3 px-3 text-left text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">Right now</th>
                    <th scope="col" className="py-3 pl-3 text-left text-[11px] font-bold uppercase tracking-wider text-emerald-400">With us</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([situation, now, withUs]) => (
                    <tr key={situation} className="border-b border-white/10 last:border-0 align-top">
                      <th scope="row" className="py-4 pr-3 text-left font-light text-[#9ca3af] leading-snug">{situation}</th>
                      <td className="py-4 px-3 font-bold text-slate-300 leading-snug">{now}</td>
                      <td className="py-4 pl-3 font-bold text-emerald-400 leading-snug">{withUs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="font-ui text-xs text-[#9ca3af] font-light leading-relaxed pt-5 mt-2 border-t border-white/10">
                You're the first callback they get, so you're the one they hire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

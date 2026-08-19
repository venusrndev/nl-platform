import React, { useState, useEffect, useRef } from 'react';
import VideoContainer from './VideoContainer';

const STEPS = [
  {
    title: 'The call rings out',
    detail: 'You\'re on a job. Nobody picks up. 0:00',
  },
  {
    title: 'They get a text back',
    detail: '"Sorry we missed you — what can we help with?" 0:15',
  },
  {
    title: 'The job is on the calendar',
    detail: 'They reply, pick a time, and you never touched your phone.',
  },
];

export const LiveDemo = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const runDemoPipeline = () => {
    if (isRunning) return;
    timers.current.forEach(clearTimeout);
    setIsRunning(true);
    setDemoStep(1);

    timers.current = [
      setTimeout(() => setDemoStep(2), 1500),
      setTimeout(() => {
        setDemoStep(3);
        setIsRunning(false);
      }, 3200),
    ];
  };

  return (
    <section id="demo" className="py-16 sm:py-20 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">See it happen</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Watch a lead get saved.
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            This is the whole thing, start to finish. A call you couldn't take
            becomes a booked appointment — without you doing anything.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10">
            <VideoContainer
              src="/nl_lead_recovery_review.mp4"
              aspectRatio="aspect-video"
              showBorder={false}
            />
          </div>

          {/* Interactive walkthrough */}
          <div className="lg:col-span-5">
            <div className="panel p-6 sm:p-8 space-y-6">
              <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide border-b border-white/10 pb-4 text-center">
                Try it yourself
              </h3>

              <button
                onClick={runDemoPipeline}
                disabled={isRunning}
                className="btn btn-primary w-full disabled:opacity-60"
              >
                {isRunning ? 'Running...' : 'Simulate a missed call'}
              </button>

              <div className="space-y-3">
                {STEPS.map((step, idx) => {
                  const reached = demoStep >= idx + 1;
                  return (
                    <div
                      key={step.title}
                      className={`p-4 rounded-xl border transition-colors duration-500 flex items-center gap-4 ${
                        reached
                          ? 'bg-[#1a1d24] border-emerald-500/40 text-[#f3f4f6]'
                          : 'bg-[#0c0d10] border-white/10 text-slate-500'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-ui font-bold text-xs flex-shrink-0 ${
                          reached ? 'bg-emerald-500 text-[#07100c]' : 'bg-[#1a1d24] text-slate-500'
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-ui text-xs font-bold uppercase tracking-wider">
                          {step.title}
                        </h4>
                        <p className="font-ui text-[11px] font-light opacity-80 mt-1">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;

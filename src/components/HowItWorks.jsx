import React, { useState, useEffect, useRef } from 'react';

/**
 * "How it works." Layout reference: Zipline, Mobbin section 7b0ca7a7 —
 * three numbered cards in a row, a visual on top of each, text underneath.
 *
 * The visuals are placeholder phone frames labelled "Example". Their text is
 * taken only from the hero example thread in the brief (28 Sep 2026) and the
 * channel names in step 03's own copy — nothing else is invented. Andy will
 * swap in screen recordings of the real system.
 */

const Frame = ({ children }) => (
  <div className="relative mx-auto w-full max-w-60 rounded-3xl border border-[color:var(--color-border-subtle,rgba(255,255,255,0.15))] bg-[#0c0d10] p-3 pt-6">
    <span className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[color:var(--color-border-subtle,rgba(255,255,255,0.15))]" aria-hidden="true"></span>
    <span className="eyebrow block text-center mb-3">Example</span>
    {children}
  </div>
);

const CallVisual = () => (
  <Frame>
    <div className="rounded-2xl bg-[#14161b] px-4 py-6 text-center">
      <p className="font-ui text-[11px] uppercase tracking-[0.15em] text-[#9ca3af]">Call</p>
      <p className="font-headline text-lg font-bold text-[#f3f4f6] mt-2 leading-tight">Mike's Heating &amp; Air</p>
      <p className="font-ui text-xs text-emerald-400 mt-2 inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        Answered
      </p>
      <p className="font-ui text-xs text-[#f3f4f6] mt-5 rounded-full border border-[color:var(--line,rgba(255,255,255,0.10))] py-2">3:30 today</p>
    </div>
  </Frame>
);

const TextVisual = () => (
  <Frame>
    <div className="space-y-2">
      <p className="font-ui text-xs leading-relaxed rounded-2xl rounded-bl-md bg-[#1a1d24] text-[#f3f4f6] px-3 py-2.5 mr-5">
        Hi, this is Mike's Heating &amp; Air. Sorry we missed your call, we're on a job. What can we help with?
      </p>
      <p className="font-ui text-xs leading-relaxed rounded-2xl rounded-br-md bg-emerald-500 text-[#07100c] px-3 py-2.5 ml-5">
        AC's blowing warm air. Can someone come out today?
      </p>
    </div>
  </Frame>
);

const INBOX = [
  { channel: 'Text', snippet: "AC's blowing warm air. Can someone come out today?" },
  { channel: 'Call' },
  { channel: 'Web form' },
  { channel: 'Facebook' },
  { channel: 'Instagram' },
];

const InboxVisual = () => (
  <Frame>
    <ul className="rounded-2xl bg-[#14161b] divide-y divide-[color:var(--line,rgba(255,255,255,0.10))]">
      {INBOX.map((row) => (
        <li key={row.channel} className="px-3 py-2.5">
          <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f3f4f6]">{row.channel}</p>
          {row.snippet && (
            <p className="font-ui text-xs text-[#9ca3af] mt-1 leading-snug truncate">{row.snippet}</p>
          )}
        </li>
      ))}
    </ul>
  </Frame>
);

const STEPS = [
  {
    num: '01',
    title: 'The call gets answered.',
    body: "If you don't get to it, the AI receptionist answers in your business's name, finds out what they need and offers a time from your real calendar.",
    tag: 'Answer plan',
    Visual: CallVisual,
  },
  {
    num: '02',
    title: 'Hang-ups get a text.',
    body: 'Anyone who hangs up before it\'s answered gets a text from your number asking what they need. Their reply comes straight to you.',
    Visual: TextVisual,
  },
  {
    num: '03',
    title: 'It all lands in one place.',
    body: 'Calls, texts, web forms, Facebook and Instagram messages arrive in one inbox on your phone, each with a note of what they want.',
    Visual: InboxVisual,
  },
];

// "Try it yourself" interactive, moved here from the old LiveDemo section.
// 28 Sep 2026: step 2 text changed per brief; the 0:00 / 0:15 timestamps
// were dropped so the demo makes no timing claim beyond "within seconds".
const DEMO_STEPS = [
  { title: 'The call rings out', detail: "You're on a job. Nobody picks up." },
  { title: 'They get a text back within seconds.' },
  { title: 'The job is on the calendar', detail: 'They reply, pick a time, and you never touched your phone.' },
];

const MissedCallDemo = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
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
    <div className="panel p-6 sm:p-8 space-y-6 max-w-xl mx-auto mt-12">
      <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide border-b border-[color:var(--line,rgba(255,255,255,0.10))] pb-4 text-center">
        Try it yourself
      </h3>

      <button onClick={run} disabled={isRunning} className="btn btn-primary w-full disabled:opacity-60">
        {isRunning ? 'Running...' : 'Simulate a missed call'}
      </button>

      <ol className="space-y-3" aria-live="polite">
        {DEMO_STEPS.map((step, idx) => {
          const reached = demoStep >= idx + 1;
          return (
            <li
              key={step.title}
              className={`p-4 rounded-xl border transition-colors duration-500 flex items-center gap-4 ${
                reached ? 'bg-[#1a1d24] border-emerald-500/40 text-[#f3f4f6]' : 'bg-[#0c0d10] border-[color:var(--line,rgba(255,255,255,0.10))] text-[#6b7280]'
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-ui font-bold text-xs flex-shrink-0 ${
                  reached ? 'bg-emerald-500 text-[#07100c]' : 'bg-[#1a1d24] text-[#6b7280]'
                }`}
              >
                {idx + 1}
              </span>
              <div>
                <h4 className="font-ui text-xs font-bold uppercase tracking-wider">{step.title}</h4>
                {step.detail && <p className="font-ui text-[11px] font-light opacity-80 mt-1">{step.detail}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// 28 Sep 2026: headingAs lets a page whose first section this is make the
// heading its h1 (same words, same classes). Everywhere else it stays an h2.
export const HowItWorks = (props) => {
  const Heading = props.headingAs || 'h2';
  return (
    <section id="how" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="eyebrow mb-3">How it works</span>
          <Heading className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center">
            Three things happen when you can't pick up.
          </Heading>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map((step) => {
            const { num, title, body, tag, Visual } = step;
            return (
            <li key={num} className="panel p-5 sm:p-6 flex flex-col">
              <div className="rounded-xl bg-[#1a1d24] py-6 px-4 min-h-80 flex items-center justify-center">
                <Visual />
              </div>
              <span className="font-ui text-xs font-bold text-emerald-400 mt-6">{num}</span>
              <h3 className="font-headline text-2xl font-bold text-[#f3f4f6] mt-2 leading-tight">{title}</h3>
              <p className="font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed mt-3">{body}</p>
              {tag && (
                <span className="self-start mt-4 font-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400 border border-emerald-500/40 rounded-full px-3 py-1">
                  {tag}
                </span>
              )}
            </li>
            );
          })}
        </ol>

        <MissedCallDemo />
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';

/**
 * "Call us and let it ring." Layout reference: Agentcard, Mobbin section
 * de67641e — copy on the left, a framed panel on the right carrying the
 * number large.
 *
 * The reference also shows message bubbles under the copy.
 * 28 Sep 2026 (Andy): one outgoing bubble, labeled "The text you'll get",
 * carrying the exact text our number sends. No reply bubble. Line breaks are
 * the message's own.
 *
 * TODO (28 Sep 2026, not today): when the AI demo line exists, this block
 * changes to "Call and talk to our AI receptionist".
 */

// Corner brackets on the framed panel, drawn from the line token.
const Corner = ({ className }) => (
  <span className={`absolute w-4 h-4 border-[color:var(--color-border-strong,rgba(255,255,255,0.20))] ${className}`} aria-hidden="true"></span>
);

export const TryIt = () => {
  return (
    <section id="try-it" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow mb-3 block">See it work</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] mb-6">
            Call us and let it ring.
          </h2>
          <p className="font-ui text-base sm:text-lg text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed max-w-2xl">
            Call (951) 528-0395 and hang up when it goes to voicemail. Within
            seconds, a text from our number lands on your phone—the same text
            your customers would get. If Cody's free, he'll pick up instead.
          </p>

          <figure className="mt-8 max-w-md">
            <figcaption className="eyebrow mb-3">The text you'll get</figcaption>
            <p className="font-ui text-sm leading-relaxed rounded-2xl rounded-bl-md bg-[#1a1d24] text-[#f3f4f6] px-4 py-3">
              Hi, this is Cody at Next League Marketing. Sorry I missed your call.<br />
              Text me back what you need, or grab 15 min here:<br />
              <a href="/free-audit" className="text-emerald-400 underline underline-offset-2 break-all">nextleaguemarketing.com/free-audit</a>
            </p>
          </figure>
        </div>

        <div className="lg:col-span-5">
          <div className="relative bg-[#14161b] border border-[color:var(--line,rgba(255,255,255,0.10))] rounded-2xl px-6 py-12 sm:py-16 text-center">
            <Corner className="top-3 left-3 border-t border-l" />
            <Corner className="top-3 right-3 border-t border-r" />
            <Corner className="bottom-3 left-3 border-b border-l" />
            <Corner className="bottom-3 right-3 border-b border-r" />

            <a
              href="tel:+19515280395"
              className="inline-flex items-center justify-center min-h-11 font-headline text-4xl sm:text-5xl font-black text-[#f3f4f6] hover:text-emerald-400 transition-colors tracking-tight whitespace-nowrap"
            >
              (951) 528-0395
            </a>
            <p className="font-ui text-xs text-[#9ca3af] font-light mt-6">
              Reply STOP any time to opt out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryIt;

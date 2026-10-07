import React from 'react';

// "The people." 28 Sep 2026: promoted from a one-line strip to a section with
// its own headline, per brief.
export const FounderLine = () => {
  return (
    <section id="people" className="scroll-mt-20 py-16 sm:py-20 bg-[color:var(--color-surface-alt,#0e1014)] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] mb-6">
          Two people, not a call center.
        </h2>
        <p className="font-ui text-base sm:text-lg text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed">
          One of us spent years on job sites and knows what it's like to hear the
          phone ring when both hands are full. We're in Riverside, and we'll come
          to you. You get a person, not a ticket queue: Cody sits down with you,
          goes through your call log and texts, and answers his own phone when
          you call.
        </p>
      </div>
    </section>
  );
};

export default FounderLine;

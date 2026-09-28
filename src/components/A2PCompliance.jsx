import React from 'react';

// Texting registration. 28 Sep 2026: shortened to the briefed H2 and single
// paragraph; the old eyebrow and three-paragraph version are retired.
export const A2PCompliance = () => {
  return (
    <section id="a2p-compliance" className="scroll-mt-20 py-16 sm:py-20 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] mb-6">
          Business texting has to be registered. We handle it.
        </h2>
        <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          US carriers quietly block texts from business numbers that aren't
          registered. There's no bounce-back; the messages just never arrive.
          Registration has to be filed under your own business details, so we
          file it with you during onboarding and don't switch anything on until
          it's approved and delivering. Already registered? We'll check it's set
          up right and go live faster.
        </p>
      </div>
    </section>
  );
};

export default A2PCompliance;

import React from 'react';

export const A2PCompliance = () => {
  return (
    <section id="a2p-compliance" className="py-16 sm:py-20 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col items-center">
          <span className="eyebrow mb-3">The part nobody warns you about</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Texting isn't plug-and-play anymore.
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-4">
            US carriers now block business texting from any number that isn't formally registered. No warning, no bounce-back — the messages just quietly never arrive. Most owners who try to set this up themselves find out weeks later, after the leads have already gone cold.
          </p>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-4">
            Registration means filing your business identity and your messaging use case with the carriers, and it has to be done under your own legal business details — it can't be borrowed from an agency's account.
          </p>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-4">
            We handle the filing, the paperwork and the follow-up as part of onboarding. You send us your business details once. We deal with the rest, and we don't switch anything live until it's approved and actually delivering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-8">
          <p className="font-ui text-sm text-slate-400 font-light italic">
            Already registered? Even better — we'll verify it's set up correctly and go live faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default A2PCompliance;

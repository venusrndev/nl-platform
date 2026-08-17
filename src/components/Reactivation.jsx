import React from 'react';

export const Reactivation = () => {
  return (
    <section id="reactivation" className="py-28 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="eyebrow mb-5">The fastest win</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            The money's already in your phone.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-6">
            Every contractor is sitting on the same forgotten asset: a list of people who already paid them, already trusted them, and haven't thought about them in two years.
          </p>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-6">
            They didn't leave. Nobody followed up.
          </p>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-6">
            We take that list — the one in your phone, your old invoices, your spreadsheet — clean it up, and put a campaign in front of it. A tune-up offer before summer. A maintenance reminder before winter. A straight "we're still here" to the ones who've gone quiet.
          </p>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto mb-6">
            No ad spend. No new leads to buy. Just the customers you already earned, reminded that you exist.
          </p>

          <div className="space-y-4 mt-12 mb-12">
            <div className="p-5 rounded-xl border bg-[#1a1d24] border-emerald-500/40 text-[#f3f4f6] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-ui font-bold text-sm flex-shrink-0 bg-emerald-500 text-[#07100c]">
                1
              </div>
              <div>
                <h4 className="font-ui text-sm font-bold uppercase tracking-wider text-[#f3f4f6]">WE LOAD YOUR LIST</h4>
                <p className="font-ui text-sm font-light text-slate-300 mt-1 leading-relaxed">Old invoices, phone contacts, spreadsheets, whatever you've got. We clean it and import it.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl border bg-[#1a1d24] border-emerald-500/40 text-[#f3f4f6] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-ui font-bold text-sm flex-shrink-0 bg-emerald-500 text-[#07100c]">
                2
              </div>
              <div>
                <h4 className="font-ui text-sm font-bold uppercase tracking-wider text-[#f3f4f6]">WE SEND THE RIGHT OFFER</h4>
                <p className="font-ui text-sm font-light text-slate-300 mt-1 leading-relaxed">Seasonal, specific, and written for your trade. Not a blast — a reason to call.</p>
              </div>
            </div>

            <div className="p-5 rounded-xl border bg-[#1a1d24] border-emerald-500/40 text-[#f3f4f6] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-ui font-bold text-sm flex-shrink-0 bg-emerald-500 text-[#07100c]">
                3
              </div>
              <div>
                <h4 className="font-ui text-sm font-bold uppercase tracking-wider text-[#f3f4f6]">YOUR PHONE STARTS RINGING</h4>
                <p className="font-ui text-sm font-light text-slate-300 mt-1 leading-relaxed">Replies land in one inbox. You book the ones you want.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto panel p-6 sm:p-8 border-l-4 border-emerald-500 mb-12">
            <p className="font-ui text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <strong className="text-[#f3f4f6]">This is usually where we start.</strong> It's the cheapest revenue you'll ever book, and it proves the system works before you spend a dollar on advertising.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="#audit-form" className="btn btn-lg btn-primary group">
            <span>Wake up my old customers</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reactivation;

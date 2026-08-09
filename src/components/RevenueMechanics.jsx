import React from 'react';

const LEAKS = [
  {
    num: '01',
    title: 'The call you couldn\'t take',
    pain: 'You were under a sink, in a chair, or on a ladder. The phone rang out. That caller had a problem worth $800 and no reason to wait.',
    fix: 'The second a call goes unanswered, they get a text from your number asking what they need. Most reply before they dial anyone else.',
  },
  {
    num: '02',
    title: 'The form nobody opened',
    pain: 'Someone filled out your contact form at 9pm. It landed in an inbox with 200 other emails. You saw it Tuesday.',
    fix: 'Submissions trigger an instant SMS and email while they\'re still on your site — the only window where they\'re still deciding.',
  },
  {
    num: '03',
    title: 'Messages in five places',
    pain: 'Texts on a personal phone, DMs on Instagram, emails on a laptop, webchat nobody checks. Leads fall between the cracks daily.',
    fix: 'One inbox for every channel. Every conversation in one thread, so nothing goes a day without an answer.',
  },
  {
    num: '04',
    title: 'Great work, no reviews',
    pain: 'You do excellent work and have 11 reviews. The competitor with 240 outranks you on Maps for every search that matters.',
    fix: 'Every finished job triggers a review request at the moment the customer is happiest — no awkward asking required.',
  },
  {
    num: '05',
    title: 'The list you forgot',
    pain: 'Hundreds of past customers sitting in your phone. They\'d hire you again. They just haven\'t thought about you in two years.',
    fix: 'Targeted campaigns wake that list up — the cheapest revenue you\'ll ever book, because they already trust you.',
  },
];

export const RevenueMechanics = () => {
  return (
    <section id="mechanics" className="py-28 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="eyebrow mb-5">Where the money goes</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Five leaks. Five fixes.
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            None of these feel like losing money. That's what makes them
            expensive — every one is a job that was already yours.
          </p>
        </div>

        {/* Leak list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {LEAKS.map((item) => (
            <div key={item.num} className="panel panel-hover p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <span className="font-headline text-2xl font-bold text-slate-600 flex-shrink-0 leading-none pt-1">
                  {item.num}
                </span>

                <div className="space-y-3">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#f3f4f6]">
                    {item.title}
                  </h3>
                  <p className="font-ui text-sm text-slate-400 font-light leading-relaxed">
                    {item.pain}
                  </p>
                  <p className="font-ui text-sm text-slate-200 font-light leading-relaxed border-l-2 border-emerald-500/60 pl-4">
                    {item.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueMechanics;

import React from 'react';

const CAPABILITIES = [
  {
    title: 'Answers when you can\'t',
    problem: 'You can\'t stop mid-install to take a call, and voicemail is where leads go to die.',
    fix: 'An unanswered call triggers a text from your business number within 15 seconds — a real conversation starts while you finish the job.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Replies before they cool off',
    problem: 'A web lead is worth the most in the first five minutes and almost nothing after an hour.',
    fix: 'Every form submission fires an instant SMS and email — you reach them while your website is still open on their phone.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'One place for every message',
    problem: 'Texts, DMs, emails and webchat live in four apps, and the one you forget to check is the one with the job in it.',
    fix: 'Every channel lands in a single inbox on your phone. Reply from anywhere, and nothing sits unanswered overnight.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Reviews without the ask',
    problem: 'Asking for reviews feels awkward, so it doesn\'t happen — and Maps rankings go to whoever has more of them.',
    fix: 'A finished job automatically sends a review request while the customer is still glad they called you. The contractor with 240 reviews wins the Maps result. It\'s not a better company — it\'s a better system.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Booking without the back-and-forth',
    problem: 'Half your day is spent playing phone tag to land on a time that works.',
    fix: 'Customers pick a slot from your real calendar. It syncs, it confirms, and it reminds them the day before so they\'re actually home when your truck pulls up.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Photos before the truck rolls',
    problem: 'You get to the job and it\'s not what was described — wrong unit, wrong part, wasted trip.',
    fix: 'The customer texts a photo of the unit, the leak, or the panel before you dispatch. You show up with the right part, or you know to quote it differently.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export const WhiteLabelFeatures = () => {
  return (
    <section id="automation" className="py-16 sm:py-20 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">What we turn on</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            Never miss another lead.
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            You don't need more traffic. You need the people already calling to
            get an answer. Six things run in the background, and you keep doing
            the work you actually get paid for.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="panel panel-hover p-6 sm:p-8 flex flex-col gap-4">
              <div className="text-slate-400">{item.icon}</div>

              <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#f3f4f6]">
                {item.title}
              </h3>

              <p className="font-ui text-sm text-slate-400 font-light leading-relaxed">
                {item.problem}
              </p>

              <p className="font-ui text-sm text-slate-200 font-light leading-relaxed border-l-2 border-emerald-500/60 pl-4 mt-auto">
                {item.fix}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <a
            href="#audit-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState({}, '', '#audit-form');
            }}
            className="btn btn-lg btn-primary group cursor-pointer"
          >
            <span>Turn this on for my business</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelFeatures;

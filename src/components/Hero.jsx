import React, { useRef, useEffect } from 'react';

// Example thread for the hero visual. Copy is final (brief, 28 Sep 2026).
// Placeholder until Andy swaps in a screen recording of the real system.
const THREAD = [
  {
    from: 'business',
    text: "Hi, this is Mike's Heating & Air. Sorry we missed your call, we're on a job. What can we help with?",
  },
  {
    from: 'customer',
    text: "AC's blowing warm air. Can someone come out today?",
  },
  {
    from: 'business',
    text: "We can be there at 3:30 today. Grab the slot here and you're booked:",
    link: '[link]',
  },
];

const CHECKS = ['No setup fee', 'No contract', 'Set up and run for you'];

const Check = () => (
  <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

/**
 * Two-sided conversation panel (layout reference: Intercom, Mobbin section
 * 5d607f64). Business on the left, customer on the right, in time order.
 * Below sm the two columns collapse to a single thread.
 */
const ConversationPanel = () => (
  <figure className="panel p-5 sm:p-6 w-full">
    <figcaption className="eyebrow mb-5">Example</figcaption>

    <div className="hidden sm:grid grid-cols-2 gap-4 pb-3 mb-4 border-b border-white/10">
      <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9ca3af]">Business</span>
      <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9ca3af] text-right">Customer</span>
    </div>

    <ol className="space-y-3">
      {THREAD.map((msg, i) => {
        const isBusiness = msg.from === 'business';
        return (
          <li key={i} className={`flex ${isBusiness ? 'justify-start sm:pr-[20%]' : 'justify-end sm:pl-[20%]'}`}>
            <p
              className={`font-ui text-sm leading-relaxed rounded-2xl px-4 py-3 max-w-[85%] sm:max-w-full ${
                isBusiness
                  ? 'bg-[#1a1d24] text-[#f3f4f6] rounded-bl-md'
                  : 'bg-emerald-500 text-[#07100c] rounded-br-md'
              }`}
            >
              <span className="sr-only">{isBusiness ? 'Business: ' : 'Customer: '}</span>
              {msg.text}
              {msg.link && (
                <>
                  {' '}
                  <span className="text-emerald-400 underline underline-offset-2">{msg.link}</span>
                </>
              )}
            </p>
          </li>
        );
      })}
    </ol>
  </figure>
);

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Hero video autoplay attempt:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0c0d10] text-[#f3f4f6]">
      {/* Background video, kept from the existing look — sits behind the new layout */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/nl_monogram_hero.mp4"
          poster="/nl_monogram_hero-poster.webp"
          autoPlay
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full object-cover object-center pointer-events-none"
          onCanPlay={(e) => e.target.play()}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0c0d10]/85 via-[#0c0d10]/45 to-[#0c0d10] pointer-events-none"></div>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(12,13,16,0.25)_0%,rgba(12,13,16,0.85)_100%)] pointer-events-none"></div>
      </div>

      {/* Layout reference: Customer.io hero — left-aligned headline, two buttons, check line */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="eyebrow text-[#EAE4EA]/70">
              Riverside, CA · For businesses that live on the phone
            </span>
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] uppercase text-[#f3f4f6] mb-7 text-balance" style={{ paddingBottom: '0.15em' }}>
            Every call answered.<br />
            <span className="text-gradient-silver inline-block text-balance" style={{ paddingBottom: '0.15em' }}>Even when you can't.</span>
          </h1>

          <p className="font-ui text-base sm:text-xl font-light text-slate-300 max-w-2xl mb-10 leading-relaxed">
            You're up a ladder, under a sink or halfway through an install, and
            the phone rings. Our AI receptionist picks up, books the job and texts
            you the details. If they hang up first, they get a text from your
            number within seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="#audit" className="btn btn-lg btn-primary group">
              <span>Book a 15-minute call</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a href="tel:+19515280395" className="btn btn-lg btn-secondary">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Try it: call (951) 528-0395</span>
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {CHECKS.map((item) => (
              <li key={item} className="flex items-center gap-2 font-ui text-xs text-[#9ca3af]">
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <ConversationPanel />
        </div>
      </div>
    </section>
  );
};

export default Hero;

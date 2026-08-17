import React, { useRef, useEffect } from 'react';

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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0c0d10] text-[#f3f4f6]">
      {/* Full-Bleed Background Video — the one showstopping element */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/nl_monogram_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full object-cover object-center pointer-events-none"
          onCanPlay={(e) => e.target.play()}
        />

        {/* Neutral dark scrims for readability — no color cast on the metal */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0c0d10]/85 via-[#0c0d10]/45 to-[#0c0d10] pointer-events-none"></div>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(12,13,16,0.25)_0%,rgba(12,13,16,0.85)_100%)] pointer-events-none"></div>
      </div>

      {/* Centered, unboxed content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-32 pb-16">
        {/* Location badge — static dot, no animation */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="eyebrow text-[#EAE4EA]/70">
            Riverside, CA · For HVAC, Plumbing & Electrical Contractors
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1] uppercase text-[#f3f4f6] mb-7 text-center w-full mx-auto" style={{ paddingBottom: '0.15em' }}>
          Missed call.<br />
          <span className="text-gradient-silver inline-block" style={{ paddingBottom: '0.15em' }}>Lost job.</span>
        </h1>

        {/* Subheadline: problem → cost → fix */}
        <p className="font-ui text-base sm:text-xl font-light text-slate-300 max-w-2xl text-center w-full mx-auto mb-10 leading-relaxed">
          One in four calls to a contractor goes unanswered. Those callers
          don't leave a voicemail — they dial the next name on the list. We make
          sure someone always answers in 15 seconds, even when you're under a
          sink or up a ladder.
        </p>

        {/* Matched CTA pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
          <a href="#problem-solution" className="btn btn-lg btn-primary w-full sm:w-auto group">
            <span>See how it works</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a href="tel:+19512031294" className="btn btn-lg btn-secondary w-full sm:w-auto">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>(951) 203-1294</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

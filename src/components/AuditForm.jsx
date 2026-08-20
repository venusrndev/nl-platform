import React, { useEffect, useRef } from 'react';

const IFRAME_MAX_HEIGHT = 850;

export const AuditForm = () => {
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    // Add GHL script dynamically when component mounts
    if (!document.querySelector('script[src="https://api.nextleaguemarketing.com/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://api.nextleaguemarketing.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // The GHL form_embed.js script listens for postMessage events from the
    // iframe and sets an ever-growing inline height on it. Without a cap the
    // page scrolls endlessly.  We use a MutationObserver to clamp the iframe
    // height every time the script touches it.
    const container = iframeContainerRef.current;
    if (!container) return;

    const clampIframe = () => {
      const iframe = container.querySelector('iframe');
      if (!iframe) return;
      const h = parseInt(iframe.style.height, 10);
      if (h && h > IFRAME_MAX_HEIGHT) {
        iframe.style.height = `${IFRAME_MAX_HEIGHT}px`;
      }
    };

    const observer = new MutationObserver(clampIframe);
    // Observe the container for any attribute / child changes the embed
    // script might make (it sets style.height on the iframe).
    observer.observe(container, {
      attributes: true,
      attributeFilter: ['style'],
      subtree: true,
    });

    // Also clamp once after the script has likely initialized
    const timer = setTimeout(clampIframe, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="audit-form" className="py-16 sm:py-20 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">Free · No pitch</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            See what you're missing.
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            In 15 minutes we'll show you how many calls went unanswered last
            month, how long your leads actually wait for a reply, and how many
            past customers are sitting in your phone waiting to be asked. No
            contract, no obligation, no slide deck.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Form Container — no border */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-[#14161b] text-[#f3f4f6] overflow-hidden rounded-2xl">
            <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide pb-4 mb-6 text-center">
              To Get Started
            </h3>
            
            <div
              ref={iframeContainerRef}
              className="w-full bg-[#14161b] overflow-hidden"
              style={{ maxHeight: `${IFRAME_MAX_HEIGHT}px`, clipPath: 'inset(0 0 2px 0)' }}
            >
              <iframe
                src="https://api.nextleaguemarketing.com/widget/form/LxswiBnuIN5djToi78xC"
                style={{
                  width: '100%',
                  height: `${IFRAME_MAX_HEIGHT}px`,
                  maxHeight: `${IFRAME_MAX_HEIGHT}px`,
                  border: 'none',
                  outline: 'none',
                  backgroundColor: '#14161b',
                  colorScheme: 'dark',
                  display: 'block'
                }}
                id="inline-LxswiBnuIN5djToi78xC" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="nlm site form"
                data-height="834"
                data-layout-iframe-id="inline-LxswiBnuIN5djToi78xC"
                data-form-id="LxswiBnuIN5djToi78xC"
                title=""
              />
            </div>
          </div>

          {/* Contact block — no border */}
          <div className="lg:col-span-5">
            <div className="p-8 space-y-6 bg-[#14161b] rounded-2xl">
              <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide pb-4 text-center">
                Rather just talk?
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+19512031294"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10] hover:bg-[#1a1d24] transition-colors group"
                >
                  <span className="p-2.5 rounded-lg bg-[#1a1d24] text-emerald-400 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block text-[10px]">Call or text</span>
                    <strong className="font-ui text-base text-[#f3f4f6] group-hover:text-emerald-400 transition-colors">
                      (951) 203-1294
                    </strong>
                  </span>
                </a>

                <a
                  href="mailto:info@nextleaguemarketing.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10] hover:bg-[#1a1d24] transition-colors group"
                >
                  <span className="p-2.5 rounded-lg bg-[#1a1d24] text-slate-300 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block text-[10px]">Email</span>
                    <strong className="font-ui text-xs sm:text-sm text-[#f3f4f6] group-hover:text-white transition-colors break-all">
                      info@nextleaguemarketing.com
                    </strong>
                  </span>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10]">
                  <span className="p-2.5 rounded-lg bg-[#1a1d24] text-slate-300 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block text-[10px]">Based in</span>
                    <strong className="font-ui text-sm text-[#f3f4f6]">
                      Riverside, CA
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;

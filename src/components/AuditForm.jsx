import React, { useEffect, useRef } from 'react';

const IFRAME_MAX_HEIGHT = 850;

// 28 Sep 2026 (Andy): /free-audit must let someone book a call, and it only
// had the enquiry form. With showBooking, the GHL booking calendar renders
// above the form. The form_embed.js this component already loads also sizes
// booking iframes. Other pages that use this section don't get the calendar.
// 28 Sep 2026 (Andy, round 2): the GHL widget is white, so it sits in a light
// card (--ink background, --radius corners, the site's panel padding) to read
// as a deliberate panel rather than a hole in the page.
const BOOKING_ID = 'SIAoMrkYu4acIVNAuREd';

export const AuditForm = ({ showBooking = false }) => {
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

  // 28 Sep 2026: trimmed per brief. The contact-card column is gone; its
  // phone and email move to one line under the form, and the address lives in
  // the site footer. Form embed unchanged.
  return (
    <section id="audit" className="scroll-mt-20 py-16 sm:py-20 bg-[color:var(--color-surface-alt,#0e1014)] border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <span className="eyebrow mb-3">Free · 15 minutes · No pitch</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            See what last month's missed calls cost you.
          </h2>
          <p className="font-ui text-base sm:text-lg text-[color:var(--color-text-body,#cbd5e1)] font-light leading-relaxed text-center w-full mx-auto">
            We'll go through it together: your call log, your texts, your inbox.
            How many calls rang out, and how many messages never got an answer.
            No contract, no obligation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {showBooking && (
            <div className="mb-6 p-6 sm:p-8 bg-[color:var(--ink,#f3f4f6)] rounded-[var(--radius,12px)] overflow-hidden">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/booking/${BOOKING_ID}`}
                id={`${BOOKING_ID}_booking`}
                title="Book a 15-minute call"
                scrolling="no"
                style={{ width: '100%', minHeight: '760px', border: 'none', overflow: 'hidden', display: 'block' }}
              />
            </div>
          )}

          <div className="p-6 sm:p-10 bg-[#14161b] text-[#f3f4f6] overflow-hidden rounded-2xl">
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

          <p className="font-ui text-sm text-[color:var(--color-text-body,#cbd5e1)] font-light text-center mt-6 leading-relaxed">
            Rather just talk? Call or text{' '}
            <a href="tel:+19515280395" className="text-[#f3f4f6] font-semibold hover:text-emerald-400 transition-colors whitespace-nowrap">
              (951) 528-0395
            </a>
            {' · '}
            <a href="mailto:info@nextleaguemarketing.com" className="text-[#f3f4f6] font-semibold hover:text-emerald-400 transition-colors break-all">
              info@nextleaguemarketing.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;

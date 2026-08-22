import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TITLE = 'Text Us | Next League Marketing';
const DESCRIPTION =
  "Text us and see the system answer. You'll have a reply in 15 seconds — that's the product, and this time you're on the other end of it.";

const WIDGET_ID = '6a88693fb433348f4015a92b';
const LOADER_SRC = 'https://widgets.leadconnectorhq.com/loader.js';
const RESOURCES_URL = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';

/**
 * The chat widget is the A2P opt-in mechanism we submit to carriers, and it has
 * to be the only consent-collecting element on the page. That is why the loader
 * is mounted here on the route rather than in index.html — a global script would
 * put it on every page alongside the audit form and break that everywhere.
 *
 * Default placement on purpose. The element supports an `inline-mode` attribute
 * (settable only before Stencil hydrates) that renders it in the page flow
 * instead of as a corner launcher, and it can be moved into a container. Both
 * were tried and dropped: moving a custom element fires disconnectedCallback /
 * connectedCallback and can leave a Stencil component half-rendered, and neither
 * could be verified locally because the widget does not activate off the live
 * domain. This page exists to unblock an A2P registration, so it takes the
 * vendor's default path and the copy points at the launcher. Revisit only with
 * a way to verify on the real domain.
 *
 * Teardown removes the loader script, every node it appended, and the widget's
 * own markup. Two things intentionally survive: the `chat-widget` custom element
 * registration and the `__ghlChatWidgetLoaderGlobal` object. Custom element
 * registration is permanent per document by spec — there is no unregister — so
 * this is a platform constraint, not an oversight. It does not affect the carrier
 * requirement: no other route contains a <chat-widget> tag, so nothing renders
 * anywhere else. Please don't re-litigate this; a full page load is the only way
 * to clear those two, and it buys nothing.
 */
function useChatWidget() {
  useEffect(() => {
    const before = new Set(document.body.children);

    const script = document.createElement('script');
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute('data-resources-url', RESOURCES_URL);
    script.setAttribute('data-widget-id', WIDGET_ID);
    script.setAttribute('data-source', 'WEB_USER');
    document.body.appendChild(script);

    return () => {
      script.remove();

      // Anything the loader appended to body that was not there before.
      for (const node of Array.from(document.body.children)) {
        if (before.has(node) || node === script) continue;
        const tag = node.tagName;
        if (tag === 'SCRIPT' || tag === 'IFRAME' || tag === 'DIV' || tag === 'STYLE' || tag === 'LINK') {
          node.remove();
        }
      }

      // Belt and braces: the widget's own markup, wherever it ended up.
      document
        .querySelectorAll(
          `[data-widget-id="${WIDGET_ID}"], chat-widget, #lc_text-widget, [id^="lc_"], [class^="lc_"], iframe[src*="leadconnectorhq"], script[src*="leadconnectorhq"]`
        )
        .forEach((el) => el.remove());
    };
  }, []);
}

export const TextUsPage = () => {
  useChatWidget();

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://nextleaguemarketing.com/text-us" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://nextleaguemarketing.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextleaguemarketing.com/text-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://nextleaguemarketing.com/og-image.jpg" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <section className="min-h-[calc(100vh-5rem)] flex items-center py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
            <span className="eyebrow mb-4">See it work</span>

            <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] mb-6">
              Text us and watch it happen.
            </h1>

            <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              You'll have a reply in 15 seconds. That's the whole product —
              you're just on the other end of it this time.
            </p>

            {/* The widget renders as a launcher in the corner, so say so. */}
            <p className="font-ui text-base sm:text-lg text-[#f3f4f6] font-semibold leading-relaxed max-w-xl mt-8">
              Tap the chat button in the bottom corner and send us anything.
            </p>

            {/*
              Consent terms live here as real prerendered copy, not inside the
              widget, so a raw fetch of this page shows the opt-in language even
              though the widget itself mounts client-side.
            */}
            <p className="font-ui text-xs text-slate-500 font-light leading-relaxed max-w-xl mt-12">
              By sending a message you agree to receive text messages from Next
              League Marketing at the number you send from. Message and data
              rates may apply. Message frequency varies. Reply HELP for help or
              STOP to opt out at any time. See our{' '}
              <a
                href="https://legal.nextleaguemarketing.com/privacy"
                className="underline hover:text-[#f3f4f6] transition-colors"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://legal.nextleaguemarketing.com/terms"
                className="underline hover:text-[#f3f4f6] transition-colors"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TextUsPage;

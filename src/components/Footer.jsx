import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from './Logo';

// 7 Oct 2026: one footer across the site. The static pages (trades,
// /multi-site) carry the same footer from src/chrome/footer.html, built in by
// scripts/build-static-chrome.mjs — change both together. The trade links
// replace the static pages' old "Plumbing marketing"-style footer links.
// 7 Oct 2026 (Andy): /text-us gets this footer too; the frozen copy of its
// old footer is gone. Its body (consent paragraph, no forms) is untouched.
// 7 Oct 2026: social profiles, as icon buttons at the end of the contact
// column (same circle as the header's phone and menu buttons). Icons are
// Feather's facebook and instagram glyphs (MIT), drawn inline.
const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/profile.php?id=61592490820630',
    label: 'Next League Marketing on Facebook',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    href: 'https://www.instagram.com/nextleaguemarketing/',
    label: 'Next League Marketing on Instagram',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

const TRADE_LINKS = [
  { href: '/hvac', label: 'HVAC' },
  { href: '/plumbing', label: 'Plumbing' },
  { href: '/electrical', label: 'Electrical' },
  { href: '/roofing', label: 'Roofing' },
  { href: '/multi-site', label: 'Multi-site' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0c0d10] py-10 border-t border-[color:var(--line,rgba(255,255,255,0.10))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10 border-b border-[color:var(--line,rgba(255,255,255,0.10))]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <BrandLockup size="large" />
            <p className="eyebrow text-[#EAE4EA]/60">
              Every call answered.
            </p>
            <nav aria-label="Trades" className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-slate-400 font-light">
              {TRADE_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-[#f3f4f6] transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-slate-400 font-light">
            <a
              href="tel:+19515280395"
              className="hover:text-[#f3f4f6] transition-colors"
            >
              (951) 528-0395
            </a>
            <a
              href="mailto:info@nextleaguemarketing.com"
              className="hover:text-[#f3f4f6] transition-colors break-all"
            >
              info@nextleaguemarketing.com
            </a>
            <Link to="/text-us" className="hover:text-[#f3f4f6] transition-colors">
              Text us
            </Link>
            <address className="not-italic text-center md:text-right leading-relaxed">
              Next League Marketing<br />
              4691 Cover St, Riverside, CA 92506
            </address>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-full border border-[color:var(--color-border-strong,rgba(255,255,255,0.20))] text-slate-400 hover:text-[#f3f4f6] hover:border-[rgba(234,228,234,0.5)] flex items-center justify-center transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {link.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Next League Marketing. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a
                href="https://legal.nextleaguemarketing.com/privacy"
                className="hover:text-[#f3f4f6] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://legal.nextleaguemarketing.com/terms"
                className="hover:text-[#f3f4f6] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <Link
            to="/free-audit"
            className="hover:text-[#f3f4f6] transition-colors uppercase tracking-[0.15em] font-semibold cursor-pointer"
          >
            Book a 15-minute call
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

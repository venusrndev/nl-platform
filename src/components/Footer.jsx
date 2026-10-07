import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from './Logo';

// 7 Oct 2026: one footer across the site. The static pages (trades,
// /multi-site) carry the same footer from src/chrome/footer.html, built in by
// scripts/build-static-chrome.mjs — change both together. The trade links
// replace the static pages' old "Plumbing marketing"-style footer links.
// 7 Oct 2026 (Andy): /text-us gets this footer too; the frozen copy of its
// old footer is gone. Its body (consent paragraph, no forms) is untouched.
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from './Logo';

// 28 Sep 2026 nav, per brief: How it works · Pricing · Trades · Multi-site ·
// Text us · phone · Book a call. Seven items do not fit beside the logo below
// 1280px, so the inline nav starts at xl and narrower screens use the drawer.
// In-page anchors scroll on the homepage and
// fall back to a full load of /#id elsewhere. /multi-site is static HTML, so it
// is a plain full-page link; /text-us is a React route.
// 7 Oct 2026: one header across the site. The static pages (trades,
// /multi-site) carry the same header from src/chrome/header.html, built in by
// scripts/build-static-chrome.mjs — change both together.
// 7 Oct 2026: the audit button reads "Book a 15-minute call", the one label
// for that action everywhere, and goes to /free-audit (site pass, item 7).
const NAV_LINKS = [
  { href: '/#how', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#industries', label: 'Trades' },
];

const PhoneIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-[color:var(--line,rgba(255,255,255,0.10))] py-3.5'
          : 'bg-gradient-to-b from-[#0c0d10] via-[#0c0d10]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <Link to="/" className="focus:outline-none flex-shrink-0">
            <BrandLockup />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-text-body,#cbd5e1)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace(/^\/?#/, '');
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', `#${targetId}`);
                  } else {
                    window.location.href = link.href;
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a href="/multi-site" className="hover:text-white transition-colors">
              Multi-site
            </a>
            <Link to="/text-us" className="hover:text-white transition-colors">
              Text us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <a href="tel:+19515280395" className="btn btn-sm btn-secondary">
              <PhoneIcon />
              <span>(951) 528-0395</span>
            </a>

            <Link to="/free-audit" className="btn btn-sm btn-primary">
              Book a 15-minute call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:+19515280395"
              className="w-11 h-11 rounded-full border border-[color:var(--color-border-strong,rgba(255,255,255,0.20))] text-[#f3f4f6] flex items-center justify-center"
              aria-label="Call Next League Marketing"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-full border border-[color:var(--color-border-strong,rgba(255,255,255,0.20))] text-[#f3f4f6] flex items-center justify-center"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 panel p-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const targetId = link.href.replace(/^\/?#/, '');
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', `#${targetId}`);
                  } else {
                    window.location.href = link.href;
                  }
                }}
                className="flex items-center min-h-11 text-sm font-semibold uppercase tracking-wider text-[#f3f4f6] cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/multi-site"
              className="flex items-center min-h-11 text-sm font-semibold uppercase tracking-wider text-[#f3f4f6]"
            >
              Multi-site
            </a>

            <Link
              to="/text-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-11 text-sm font-semibold uppercase tracking-wider text-[#f3f4f6]"
            >
              Text us
            </Link>

            <div className="pt-2 flex flex-col gap-3">
              <a href="tel:+19515280395" className="btn btn-secondary w-full">
                <PhoneIcon />
                <span>(951) 528-0395</span>
              </a>
              <Link
                to="/free-audit"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full"
              >
                Book a 15-minute call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

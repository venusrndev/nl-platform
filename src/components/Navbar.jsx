import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandLockup } from './Logo';

const NAV_LINKS = [
  { href: '/#problem-solution', label: 'The Problem' },
  { href: '/#mechanics', label: 'Where Leads Leak' },
  { href: '/#automation', label: 'The System' },
  { href: '/#demo', label: 'See It Live' },
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
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 py-3.5'
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
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+19512031294" className="btn btn-sm btn-secondary">
              <PhoneIcon />
              <span>(951) 203-1294</span>
            </a>

            <Link to="/free-audit" className="btn btn-sm btn-primary">
              Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+19512031294"
              className="w-10 h-10 rounded-full border border-white/20 text-[#f3f4f6] flex items-center justify-center"
              aria-label="Call Next League Marketing"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-white/20 text-[#f3f4f6] flex items-center justify-center"
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
          <div className="lg:hidden mt-4 panel p-5 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider text-[#f3f4f6]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a href="tel:+19512031294" className="btn btn-secondary w-full">
                <PhoneIcon />
                <span>(951) 203-1294</span>
              </a>
              <Link
                to="/free-audit"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary w-full"
              >
                Get My Free Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { BrandLockup } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#0c0d10] py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <BrandLockup size="large" />
            <p className="eyebrow text-[#EAE4EA]/60">
              Strategy. Automation. Growth.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-slate-400 font-light">
            <a
              href="tel:+19512031294"
              className="hover:text-[#f3f4f6] transition-colors"
            >
              (951) 203-1294
            </a>
            <a
              href="mailto:info@nextleaguemarketing.com"
              className="hover:text-[#f3f4f6] transition-colors break-all"
            >
              info@nextleaguemarketing.com
            </a>
            <span>Riverside, CA</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <p>© {new Date().getFullYear()} Next League Marketing. All rights reserved.</p>
          <a href="#audit-form" className="hover:text-[#f3f4f6] transition-colors uppercase tracking-[0.15em] font-semibold">
            Get a free audit
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';

const FIELDS = [
  {
    name: 'fullName',
    type: 'text',
    label: 'Your name',
    placeholder: 'Marcus Vance',
    autoComplete: 'name',
  },
  {
    name: 'businessName',
    type: 'text',
    label: 'Business name',
    placeholder: 'Vance Plumbing & Drain',
    autoComplete: 'organization',
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Where should we text you?',
    placeholder: '(951) 203-1294',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email for the written audit',
    placeholder: 'marcus@vanceplumbing.com',
    autoComplete: 'email',
  },
];

export const AuditForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="audit-form" className="py-28 bg-[#0e1014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="eyebrow mb-5">Free · No pitch</span>
          <h2 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#f3f4f6] tracking-tight leading-[1.05] text-center w-full mx-auto mb-6">
            See what you're missing.
          </h2>
          <p className="font-ui text-base sm:text-lg text-slate-300 font-light leading-relaxed text-center w-full mx-auto">
            In 15 minutes we'll show you how many calls went unanswered last
            month, how long your leads actually wait for a reply, and what it
            would take to close that gap. No contract, no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-7 panel p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400 text-xl">
                  ✓
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#f3f4f6]">
                  We're on it
                </h3>
                <p className="font-ui text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                  You'll hear from us at{' '}
                  <strong className="text-[#f3f4f6] font-semibold">
                    {formData.phone || 'the number you gave us'}
                  </strong>
                  {' '}shortly. If you'd rather not wait, call{' '}
                  <a href="tel:+19512031294" className="text-emerald-400 hover:text-emerald-300">
                    (951) 203-1294
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary mt-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.name]: e.target.value })
                      }
                      className="w-full bg-[#0c0d10] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-[#f3f4f6] placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                ))}

                <button type="submit" className="btn btn-primary w-full">
                  Get my free audit
                </button>

                <p className="font-ui text-[11px] text-slate-500 font-light text-center leading-relaxed">
                  We reply the same way we'll set up for you — fast, and from a
                  real person.
                </p>
              </form>
            )}
          </div>

          {/* Contact block */}
          <div className="lg:col-span-5">
            <div className="panel p-8 space-y-6">
              <h3 className="font-headline text-xl font-bold uppercase text-[#f3f4f6] tracking-wide border-b border-white/10 pb-4 text-center">
                Rather just talk?
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+19512031294"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10] border border-white/10 hover:border-emerald-500/50 transition-colors group"
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
                  href="mailto:nextleaguemarketing@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10] border border-white/10 hover:border-white/30 transition-colors group"
                >
                  <span className="p-2.5 rounded-lg bg-[#1a1d24] text-slate-300 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="eyebrow block text-[10px]">Email</span>
                    <strong className="font-ui text-xs sm:text-sm text-[#f3f4f6] group-hover:text-white transition-colors break-all">
                      nextleaguemarketing@gmail.com
                    </strong>
                  </span>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0c0d10] border border-white/10">
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

import { ArrowRight, FileText } from 'lucide-react';
import { useState } from 'react';
import { HERO_OUTCOMES, PROFILE } from '../data/portfolioData';
import { HERO_IMAGE } from '../data/portfolioImages';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="top" className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <p className="text-sm font-medium text-[#2563EB]">
                {PROFILE.roleTitle}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-slate-900 leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                {PROFILE.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {PROFILE.leadCopy}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  Explore Case Studies
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#interview-prep"
                  className="inline-flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] rounded-sm"
                >
                  <FileText className="w-4 h-4" />
                  Interview Pitch &amp; GitHub Review
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>Published in {PROFILE.publications.join(' · ')}</span>
                <span aria-hidden="true">/</span>
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              {!imageError ? (
                <img
                  src={HERO_IMAGE}
                  alt="Product management strategy notebook with wireframes and laptop on a sunlit desk"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[280px] flex flex-col justify-end p-6 bg-gradient-to-br from-slate-100 to-slate-200">
                  <p className="font-display text-lg font-semibold text-slate-800">
                    B2B SaaS, Cloud &amp; Applied AI
                  </p>
                  <p className="text-sm text-slate-600">
                    Discovery · PRDs · Evaluation Harnesses
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_OUTCOMES.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-slate-900">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600 leading-snug">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

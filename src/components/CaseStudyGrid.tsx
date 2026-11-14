import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import type { CaseStudy, FilterCategory } from '../data/portfolioData';
import { CASE_STUDY_IMAGES } from '../data/portfolioImages';
import { filterCaseStudies } from '../utils/portfolioLogic';

interface CaseStudyGridProps {
  studies: CaseStudy[];
  selectedFilter: FilterCategory;
  onSelectFilter: (filter: FilterCategory) => void;
  onSelectStudy: (study: CaseStudy) => void;
}

const FILTER_OPTIONS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'ai-eval', label: 'AI & Evaluation' },
  { id: 'enterprise-saas', label: 'Enterprise SaaS' },
  { id: 'workflow-0to1', label: '0-to-1 Workflows' },
];

function CaseStudyCard({
  study,
  onSelect,
}: {
  study: CaseStudy;
  onSelect: (study: CaseStudy) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between transition-colors hover:border-slate-300">
      <div>
        <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden border-b border-slate-200">
          {!imgError ? (
            <img
              src={CASE_STUDY_IMAGES[study.imageKey]}
              alt={`Editorial architectural visual representing ${study.title}`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 p-6">
              <span className="font-display text-lg font-semibold text-slate-700">
                {study.title}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
            <span className="font-mono tabular-nums text-slate-700">{study.index}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2563EB]">{study.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{study.timeframe}</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              {study.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {study.subtitle}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between gap-4">
            <span className="font-mono tabular-nums text-lg font-semibold text-slate-900">
              {study.headlineMetric.value}
            </span>
            <span className="text-xs text-slate-500 text-right">
              {study.headlineMetric.label}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onSelect(study)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] rounded-sm"
        >
          Read PM Case Study
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <a
          href={study.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors py-1.5 whitespace-nowrap"
        >
          GitHub Repo
        </a>
      </div>
    </article>
  );
}

export function CaseStudyGrid({
  studies,
  selectedFilter,
  onSelectFilter,
  onSelectStudy,
}: CaseStudyGridProps) {
  const visibleStudies = filterCaseStudies(studies, selectedFilter);

  return (
    <section id="case-studies" className="py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="text-sm font-medium text-[#2563EB]">Selected Product Work</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Case studies framed for product judgment, trade-offs, and evidence
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter case studies by product focus"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start shrink-0 max-w-full overflow-x-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectFilter(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {visibleStudies.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center space-y-3">
            <p className="text-base font-medium text-slate-900">
              No case studies match this filter.
            </p>
            <button
              type="button"
              onClick={() => onSelectFilter('all')}
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              Show All Work
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                onSelect={onSelectStudy}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

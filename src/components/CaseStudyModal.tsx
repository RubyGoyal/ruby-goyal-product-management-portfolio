import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CaseStudy } from '../data/portfolioData';
import { getAdjacentCaseStudies } from '../utils/portfolioLogic';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  allStudies: CaseStudy[];
  onClose: () => void;
  onNavigate: (study: CaseStudy) => void;
}

type ModalTab = 'overview' | 'execution';

export function CaseStudyModal({
  study,
  allStudies,
  onClose,
  onNavigate,
}: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [study?.id]);

  useEffect(() => {
    if (!study) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [study, onClose]);

  if (!study) return null;

  const { previous, next } = getAdjacentCaseStudies(allStudies, study.id);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-xl">
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
              <span className="font-mono tabular-nums text-slate-700">{study.index}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2563EB]">{study.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{study.role}</span>
              <span aria-hidden="true">·</span>
              <span>{study.timeframe}</span>
            </div>
            <h2
              id="case-study-modal-title"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
            >
              {study.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-3 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Case study sections"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg"
          >
            {[
              { id: 'overview' as ModalTab, label: 'Problem & Trade-offs' },
              { id: 'execution' as ModalTab, label: 'Execution & Evidence' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={study.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-[#2563EB] whitespace-nowrap"
            >
              View Repository
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2563EB] hover:text-[#1D4ED8] whitespace-nowrap"
              >
                Live Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <div className="font-mono tabular-nums text-xl font-semibold text-[#2563EB]">
                {study.headlineMetric.value}
              </div>
              <div className="text-xs text-slate-600">{study.headlineMetric.label}</div>
            </div>
            {study.secondaryMetrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="font-mono tabular-nums text-xl font-semibold text-slate-900">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-display text-base font-semibold text-slate-900">
                    Problem Statement
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {study.problemStatement}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-base font-semibold text-slate-900">
                    Target Users &amp; Context
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {study.targetUsers}
                  </p>
                  <p className="pt-2 text-xs font-mono text-slate-500">
                    {study.stackSummary}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Key Product Decisions &amp; Trade-Offs
                </h3>
                <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl">
                  {study.productDecisions.map((item) => (
                    <div key={item.decision} className="p-4 space-y-2">
                      <div className="text-sm font-semibold text-slate-900">
                        {item.decision}
                      </div>
                      <div className="text-xs text-slate-500">
                        Alternative rejected: {item.alternativeRejected}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'execution' && (
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Architecture &amp; Execution
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                  {study.executionArchitecture.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Verified Outcomes &amp; Evidence
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                  {study.outcomesAndEvidence.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-display text-sm font-semibold text-slate-900">
                  What I Would Prioritize Next (v+1 Roadmap)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {study.nextIteration}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          {previous ? (
            <button
              type="button"
              onClick={() => onNavigate(previous)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer py-1.5 truncate max-w-[45%]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="truncate">{previous.title}</span>
            </button>
          ) : (
            <span />
          )}

          {next && (
            <button
              type="button"
              onClick={() => onNavigate(next)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer py-1.5 truncate max-w-[45%]"
            >
              <span className="truncate">{next.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

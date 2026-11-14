import { AlertTriangle, CheckSquare, ExternalLink, RotateCcw, Square } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GITHUB_AUDIT_ITEMS, PROFILE } from '../data/portfolioData';
import { computeReadinessProgress } from '../utils/portfolioLogic';

const STORAGE_KEY = 'ruby_pm_github_audit_checked';

export function GithubAuditSection() {
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [completedIds]);

  const toggleItem = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progress = computeReadinessProgress(GITHUB_AUDIT_ITEMS, completedIds);

  return (
    <section id="github-audit" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-sm font-medium text-[#2563EB]">
              Live GitHub Review · github.com/RubyGoyal
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Pre-interview GitHub audit &amp; action checklist
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Your public profile already shows strong shipped TypeScript AI projects and an excellent profile README. Fix these four concrete items before sharing links in PM interviews.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 min-w-[260px] space-y-2.5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-slate-600">
                Checklist Progress
              </span>
              <span className="font-mono tabular-nums text-sm font-semibold text-slate-900">
                {progress.completedCount}/{progress.totalCount} ({progress.percent}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-[#2563EB] transition-transform duration-300 origin-left"
                style={{ transform: `scaleX(${progress.percent / 100})` }}
              />
            </div>
            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:text-[#1D4ED8]"
              >
                Open GitHub Profile
                <ExternalLink className="w-3 h-3" />
              </a>
              {completedIds.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCompletedIds([])}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden">
          {GITHUB_AUDIT_ITEMS.map((item) => {
            const checked = completedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-6 transition-colors ${checked ? 'bg-slate-50/70' : 'bg-white'}`}
              >
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={checked}
                    aria-label={`Mark ${item.priority} ${item.repoName} fix (${item.id.replace('audit-', '')}) as complete`}
                    onClick={() => toggleItem(item.id)}
                    className="mt-0.5 text-slate-700 hover:text-[#2563EB] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] rounded-sm"
                  >
                    {checked ? (
                      <CheckSquare className="w-5 h-5 text-[#2563EB]" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </button>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                      <span
                        className={`inline-flex items-center gap-1 font-semibold ${
                          item.priority === 'Urgent'
                            ? 'text-red-700'
                            : item.priority === 'High'
                            ? 'text-amber-700'
                            : 'text-slate-700'
                        }`}
                      >
                        {item.priority === 'Urgent' && (
                          <AlertTriangle className="w-3.5 h-3.5" />
                        )}
                        Priority: {item.priority}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="font-mono text-slate-800 font-medium">
                        {item.repoName}
                      </span>
                      {checked && (
                        <>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="font-medium text-[#2563EB]">Completed</span>
                        </>
                      )}
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        checked ? 'text-slate-500 line-through' : 'text-slate-900 font-medium'
                      }`}
                    >
                      {item.finding}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-sm text-slate-600 leading-relaxed">
                      <div>
                        <span className="font-semibold text-slate-800">Recommended Fix: </span>
                        {item.actionToTake}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">Why Interviewers Care: </span>
                        {item.interviewImpact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

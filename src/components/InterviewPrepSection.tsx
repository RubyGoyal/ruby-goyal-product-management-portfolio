import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import {
  CASE_STUDIES,
  INTERVIEW_TRACKS,
  type CaseStudy,
  type InterviewTrackId,
} from '../data/portfolioData';
import { getInterviewTrack } from '../utils/portfolioLogic';

interface InterviewPrepSectionProps {
  onSelectStudy: (study: CaseStudy) => void;
}

export function InterviewPrepSection({ onSelectStudy }: InterviewPrepSectionProps) {
  const [selectedTrackId, setSelectedTrackId] = useState<InterviewTrackId>('ai-pm');
  const [copied, setCopied] = useState(false);

  const activeTrack = getInterviewTrack(INTERVIEW_TRACKS, selectedTrackId);
  const leadStudies = activeTrack.leadCaseStudyIds
    .map((id) => CASE_STUDIES.find((study) => study.id === id))
    .filter((study): study is CaseStudy => Boolean(study));

  const handleCopyPitch = async () => {
    try {
      await navigator.clipboard.writeText(activeTrack.sixtySecondPitch);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="interview-prep" className="py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-sm font-medium text-[#2563EB]">PM Interview Positioning</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Tailor your 60-second narrative by target Product Manager role
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Target product management role"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start"
          >
            {INTERVIEW_TRACKS.map((track) => {
              const active = track.id === selectedTrackId;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedTrackId(track.id);
                    setCopied(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {track.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="text-xs font-medium text-slate-500">Target Roles</div>
                <div className="text-sm font-semibold text-slate-900">
                  {activeTrack.targetRoles}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPitch}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                    Copied Pitch
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy 60s Pitch
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base font-semibold text-slate-900">
                “Tell me about yourself” Script
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeTrack.sixtySecondPitch}
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs font-semibold text-slate-900">
                Key Talking Points to Emphasize
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                {activeTrack.keyProofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">
              Recommended Case Studies to Lead With
            </h3>
            <p className="text-sm text-slate-600">
              Open either case study below to rehearse trade-offs, metrics, and likely interviewer follow-ups.
            </p>
            <div className="space-y-4">
              {leadStudies.map((study) => (
                <div
                  key={study.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span>
                      <span className="font-mono tabular-nums text-slate-700">
                        {study.index}
                      </span>{' '}
                      · {study.categoryLabel}
                    </span>
                    <span className="font-mono tabular-nums font-medium text-slate-900">
                      {study.headlineMetric.value}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    {study.title}
                  </h4>
                  <button
                    type="button"
                    onClick={() => onSelectStudy(study)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer py-1"
                  >
                    Open Interview Q&amp;A &amp; Deep Dive
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

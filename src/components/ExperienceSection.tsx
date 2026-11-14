import { EXPERIENCE_PILLARS, PROFILE } from '../data/portfolioData';

const TOOLKIT_GROUPS = [
  {
    title: 'Product & Discovery',
    items: 'Product Discovery · PRDs & Acceptance Criteria · Prioritization · Roadmaps · Customer Journeys · Agile Delivery',
  },
  {
    title: 'Data & Quality Systems',
    items: 'SQL Fundamentals · Funnel & MQL Analytics · Offline Eval Benchmarks · Lean Six Sigma Yellow Belt · CSV Analysis',
  },
  {
    title: 'Technical & AI Stack',
    items: 'TypeScript · React & Next.js · Node.js · GitHub & Docs-as-Code · Gemini & Claude APIs · Vercel & Azure App Service',
  },
];

export function ExperienceSection() {
  return (
    <section id="pm-approach" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm font-medium text-[#2563EB]">Why This Transition Works</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Eight years at the intersection of B2B buyers, cloud architecture, and shipping code
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 leading-relaxed">
            <p>
              Across product marketing at Embee Software and lead technical writing published on{' '}
              <span className="font-medium text-slate-900">
                {PROFILE.publications.join(', ')}
              </span>
              , my work has always centered on understanding enterprise buyer pain, translating technical capability into clear product value, and driving adoption.
            </p>
            <p>
              Moving into Product Management formalizes what I already do: define the problem, specify measurable acceptance criteria, make pragmatic build-vs-AI trade-offs, and evaluate outcomes rigorously.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="py-6 md:pr-6 lg:px-6 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 border-slate-200 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="font-mono tabular-nums text-xs font-medium text-[#2563EB]">
                  {pillar.index}.
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>
              <p className="text-xs font-medium text-slate-500 pt-2 border-t border-slate-100">
                {pillar.evidence}
              </p>
            </div>
          ))}
        </div>

        <div id="toolkit" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 scroll-mt-24">
          {TOOLKIT_GROUPS.map((group) => (
            <div key={group.title} className="space-y-2">
              <h3 className="font-display text-sm font-semibold text-slate-900">
                {group.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

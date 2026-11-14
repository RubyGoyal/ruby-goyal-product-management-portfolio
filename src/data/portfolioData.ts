import type { CaseImageKey } from './portfolioImages';

export type CaseCategory = 'ai-eval' | 'enterprise-saas' | 'workflow-0to1';

export type FilterCategory = 'all' | CaseCategory;

export type InterviewTrackId = 'ai-pm' | 'b2b-saas-pm' | 'technical-pm';

export interface CaseMetric {
  value: string;
  label: string;
}

export interface ProductTradeOff {
  decision: string;
  alternativeRejected: string;
  rationale: string;
}

export interface InterviewQA {
  question: string;
  strongAnswerOutline: string[];
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: CaseCategory;
  categoryLabel: string;
  role: string;
  timeframe: string;
  stackSummary: string;
  repoUrl: string;
  liveUrl?: string;
  imageKey: CaseImageKey;
  featured: boolean;
  headlineMetric: CaseMetric;
  secondaryMetrics: CaseMetric[];
  problemStatement: string;
  targetUsers: string;
  productDecisions: ProductTradeOff[];
  executionArchitecture: string[];
  outcomesAndEvidence: string[];
  nextIteration: string;
  interviewQuestions: InterviewQA[];
}

export interface ExperiencePillar {
  index: string;
  title: string;
  summary: string;
  evidence: string;
}

export interface InterviewTrack {
  id: InterviewTrackId;
  label: string;
  targetRoles: string;
  leadCaseStudyIds: string[];
  sixtySecondPitch: string;
  keyProofPoints: string[];
}

export interface AuditItem {
  id: string;
  priority: 'Urgent' | 'High' | 'Medium';
  repoName: string;
  finding: string;
  actionToTake: string;
  interviewImpact: string;
}

export const PROFILE = {
  name: 'Ruby Goyal',
  roleTitle: 'Technical Product Manager · B2B SaaS, Cloud & AI',
  location: 'India',
  email: 'rubygoyal41@gmail.com',
  githubUrl: 'https://github.com/RubyGoyal',
  linkedinUrl: 'https://www.linkedin.com/in/ruby-goyal/',
  headline: 'Turning complex cloud, compliance, and AI workflows into verifiable products.',
  leadCopy:
    'With 8+ years across B2B IT, cloud ecosystems, product marketing at Embee Software, and lead technical writing, I bridge customer discovery, PRDs, and hands-on TypeScript AI execution.',
  publications: ['Geekflare', 'DZone', 'HackerNoon', 'SAP'],
  credentials: ['8+ Years in B2B IT & Cloud', 'Lean Six Sigma Yellow Belt', 'Microsoft & SAP Ecosystem Depth'],
};

export const HERO_OUTCOMES: CaseMetric[] = [
  { value: '8+ Yrs', label: 'B2B Cloud, Marketing & Tech Writing' },
  { value: '60,261', label: 'Evidence-Linked Facts Verified' },
  { value: '4', label: 'Shipped AI & Enterprise SaaS Products' },
  { value: '40/43', label: 'Human-Audited Precision on Signalpost' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'signalpost',
    index: '01',
    title: 'Signalpost: Norwegian Company Intelligence Agent',
    subtitle: 'Evidence-linked company research pipeline built for deterministic accuracy at zero inference cost.',
    category: 'ai-eval',
    categoryLabel: 'AI & Evaluation',
    role: 'Product Builder & Lead Evaluator',
    timeframe: 'Nov 2026 · Builderr Challenge',
    stackSummary: 'TypeScript · Node.js 22 · Offline Eval Suite · GitHub Actions',
    repoUrl: 'https://github.com/RubyGoyal/signalpost-norwegian-company-agent',
    liveUrl: 'https://signalpost-g4p5.onrender.com',
    imageKey: 'signalpost',
    featured: true,
    headlineMetric: { value: '1,000 / 1,000', label: 'Envelopes available in 360s at $0 API cost' },
    secondaryMetrics: [
      { value: '60,261', label: 'Verified facts with source URLs' },
      { value: '158', label: 'Automated offline evaluation checks' },
      { value: '0', label: 'False removals on re-run' },
    ],
    problemStatement:
      'B2B intelligence tools frequently hallucinate company attributes, confuse subsidiary websites with parent holding companies, or surface expired job ads from stale structured data. Users need auditable company profiles where every single claim links directly to its primary registry or official site.',
    targetUsers:
      'B2B data teams, sales intelligence analysts, and compliance researchers evaluating Norwegian organizations across official Brønnøysund registers, corporate sites, and NAV job listings.',
    productDecisions: [
      {
        decision: 'Deterministic verification rules over LLM-based scraping',
        alternativeRejected: 'Sending raw HTML pages to an LLM to summarize company profiles',
        rationale:
          'Eliminated per-company inference costs ($0 per 1,000-company batch), dropped batch runtime to 360 seconds, and guaranteed deterministic source URLs, retrieval timestamps, and reporting periods on every fact.',
      },
      {
        decision: 'Strict entity-matching boundaries for subsidiaries vs. holding groups',
        alternativeRejected: 'Accepting any bare brand-name social handle or group-level domain',
        rationale:
          'Prevented cross-entity contamination (e.g., matching a regional arm or parent group account to a local entity) based directly on Builderr v5 evaluation feedback.',
      },
      {
        decision: 'Live job-opening verification before publishing',
        alternativeRejected: 'Trusting careers-page JSON-LD structured data blindly',
        rationale:
          'Every candidate job ad URL is opened and checked for closed-position phrases ("ingen ledige stillinger") or list redirects so stale postings never reach end users.',
      },
    ],
    executionArchitecture: [
      'Ingests Norwegian organization numbers and queries official Brønnøysund registers as the anchor source of truth.',
      'Cross-verifies official corporate websites, linked social profiles, dated news posts, and live NAV/careers job openings.',
      'Runs an automated 158-check offline test suite plus GitHub Actions full-batch runs and Momentic external live QA verification.',
    ],
    outcomesAndEvidence: [
      'Full live run on 1,000 companies completed in 360 seconds with 1,000/1,000 envelopes available and 60,261 evidence-linked facts.',
      'Independent human audit of 52 published items verified 40/43 judgeable facts accurate (100% precision on websites, social accounts, and news posts); cross-checked 49/51 with Claude.',
      'External QA agent (Momentic) surfaced 10 live demo issues — all 10 were resolved and 9 confirmed fixed on live re-run (with the 10th covered by offline regression tests).',
    ],
    nextIteration:
      'Prioritize change-diff webhooks so downstream CRM users receive alerts only when material status changes occur (new leadership, hiring spikes, or registry updates) rather than re-polling full envelopes.',
    interviewQuestions: [
      {
        question: 'Why did you choose NOT to use an LLM for the core extraction pipeline?',
        strongAnswerOutline: [
          'Frame around unit economics, latency, and auditability: 1,000 companies via LLM browsing would cost tens of dollars per run and introduce non-deterministic hallucinations.',
          'Explain how deterministic rules + a 158-check eval harness achieved 60,261 verifiable facts at $0/run, reserving human/LLM review strictly for QA auditing.',
        ],
      },
      {
        question: 'How did you incorporate external stakeholder feedback into v5?',
        strongAnswerOutline: [
          'Cite the 3 specific edge cases surfaced by Builderr reviewers (stale job JSON-LD, holding-company social bleed, redirect loops).',
          'Show the product loop: converted each feedback item into both a production rule and a permanent offline regression test.',
        ],
      },
    ],
  },
  {
    id: 'embee-content-iq',
    index: '02',
    title: 'EmbeeContentIQ: Enterprise B2B Content Audit Platform',
    subtitle: 'Full-stack Next.js audit engine turning fragmented marketing reviews into weighted, actionable scores.',
    category: 'enterprise-saas',
    categoryLabel: 'Enterprise SaaS',
    role: 'Product Manager & Full-Stack Builder',
    timeframe: '2026 · Embee Software GTM',
    stackSummary: 'Next.js 14 · TypeScript · Claude Sonnet 4.5 · Cheerio · PDF/DOCX Parsing',
    repoUrl: 'https://github.com/RubyGoyal/embee-content-iq-v4',
    imageKey: 'content-iq',
    featured: true,
    headlineMetric: { value: '22 Rules', label: 'Canonical Microsoft, SAP & Cybersecurity checks' },
    secondaryMetrics: [
      { value: '3 Modes', label: 'Live URL, DOCX/PDF upload, or raw text' },
      { value: '6 Pillars', label: 'Naming, Brand, SEO, Readability, Links, CTA' },
      { value: '0-Key Mode', label: 'Core scoring works without AI API dependency' },
    ],
    problemStatement:
      'Enterprise IT marketing teams at multi-practice cloud integrators lose hours manually checking partner naming compliance ("Office 365" vs. Microsoft 365, "SAP BusinessOne" vs. SAP Business One), missing proof points, and inconsistent SEO structure across web pages, PDFs, and DOCX drafts.',
    targetUsers:
      'B2B product marketers, content leads, and CMO reviewers shipping enterprise cloud, cybersecurity, and SAP campaign assets.',
    productDecisions: [
      {
        decision: 'Graceful degradation: deterministic rule engine separate from AI enrichment',
        alternativeRejected: 'Making the entire audit dependent on an LLM prompt',
        rationale:
          'Deterministic checks (22 canonical naming rules, H1/meta hygiene, readability, internal link density) run deterministically in milliseconds even without an API key; Claude Sonnet 4.5 is invoked only where generative judgment adds value (headline and meta rewrites).',
      },
      {
        decision: 'Server-side URL fetching and DOCX/PDF parsing routes',
        alternativeRejected: 'Supporting paste-only plain text in the browser',
        rationale:
          'Real marketing stakeholders review live URLs and Word/PDF agency drafts; server-side Cheerio, mammoth, and pdf-parse routes eliminated browser CORS blocks and copy-paste friction.',
      },
    ],
    executionArchitecture: [
      'Modular Next.js 14 App Router architecture separating canonical dictionary (`dictionary.ts`), scoring engine (`engine.ts`), HTML parser (`parser.ts`), and AI wrapper (`anthropic.ts`).',
      'Encodes Embee Software enterprise proof points (2,500+ organizations, 34+ years, Microsoft Partner of the Year, #1 APAC for SAP Business One) directly into conversion checks.',
      'Supports deployment on either Vercel or Azure App Service to align with Embee’s internal Azure infrastructure.',
    ],
    outcomesAndEvidence: [
      'Unified 6 fragmented manual review spreadsheets and checklists into a single weighted audit score with prioritized fix lists and keyword coverage tables.',
      'Eliminated recurring partner-trademark compliance errors before CMO sign-off.',
    ],
    nextIteration:
      'Track historical audit scores per URL over time and integrate CMS/HubSpot webhooks to flag pages whose partner product naming drifts after Microsoft/SAP rebrands.',
    interviewQuestions: [
      {
        question: 'How did you decide what belongs in deterministic rules vs. the LLM layer?',
        strongAnswerOutline: [
          'Use a clear product matrix: objective compliance (product names, meta length, proof-point presence) must be 100% deterministic, fast, and free.',
          'Generative AI belongs strictly to synthesis tasks (rewriting weak headlines/CTAs in CXO tone) where deterministic regex cannot help.',
        ],
      },
      {
        question: 'How would you measure ROI if rolling this out across a 15-person marketing org?',
        strongAnswerOutline: [
          'North Star: Time-to-publish (hours spent in editorial/CMO review cycles per asset).',
          'Guardrails: First-pass compliance rate, organic CTR lift on rewritten meta descriptions, and conversion-CTA presence across top product pages.',
        ],
      },
    ],
  },
  {
    id: 'groww-assist',
    index: '03',
    title: 'Groww Assist: Facts-Only Mutual Fund RAG Assistant',
    subtitle: 'Regulated fintech Q&A system engineered for zero-hallucination citations and safe compliance refusals.',
    category: 'ai-eval',
    categoryLabel: 'AI & Evaluation',
    role: 'Product Manager · AI Safety & Evals',
    timeframe: 'Sep 2026 · Fintech Case Study',
    stackSummary: 'TypeScript · Gemini RAG · Citation Verification · Regulatory Guardrails',
    repoUrl: 'https://github.com/RubyGoyal/Groww-Assist-Gemini',
    imageKey: 'groww-rag',
    featured: false,
    headlineMetric: { value: '100% Grounded', label: 'Strict growwmf.in, SEBI & AMFI citations only' },
    secondaryMetrics: [
      { value: '4 Schemes', label: 'Equity, ELSS, Index & Liquid edge cases' },
      { value: '0.0001%', label: 'Graded decimal exit-load precision preserved' },
      { value: 'Zero Advice', label: 'Refuses projections & portfolio picks' },
    ],
    problemStatement:
      'In Indian financial services, an AI assistant that blurs the line between factual scheme information and investment advice violates SEBI (Investment Advisers) Regulations, 2013. General-purpose RAG chatbots also confuse corporate domains (`growwmf.in` AMC vs. `groww.in` distributor) and flatten multi-tier exit load decimals.',
    targetUsers:
      'Retail mutual-fund investors seeking factual scheme rules (expense ratios, Section 80C lock-ins, exit loads) and compliance officers auditing distributor disclosures.',
    productDecisions: [
      {
        decision: 'Hard domain allowlist (`growwmf.in`, SEBI, AMFI, KFintech) + mandatory safe refusal',
        alternativeRejected: 'Open-web search or helpful "general educational" suggestions on fund selection',
        rationale:
          'Under SEBI Reg. MF/068/11/03, distributors may explain scheme facts but never recommend transactions or project returns. Refusal is a core safety feature, not a UX failure.',
      },
      {
        decision: 'Four targeted stress-test schemes in the evaluation harness',
        alternativeRejected: 'Testing only generic large-cap equity questions',
        rationale:
          'Selected Groww ELSS (3-year 80C statutory lock-in), Nifty Total Market Index (0.26% TER, 7-day exit load), and Liquid Fund (6-day graded exit load from 0.0070% to 0.0045%) specifically to catch cross-scheme hallucination and numerical rounding bugs.',
      },
    ],
    executionArchitecture: [
      'Retrieval index scoped strictly to verified AMC Scheme Information Documents (SIDs), KIMs, and official RTA portals.',
      'Response contract enforces an authoritative source link on every factual claim and a polite, explicit refusal template for advisory prompts.',
      'Evaluation suite tests lock-in leakage across funds and preserves four-decimal-place liquid fund fee schedules.',
    ],
    outcomesAndEvidence: [
      'Demonstrated clean separation of corporate entities (`growwmf.in` vs. `groww.in`) and zero hallucinated lock-in rules across 4 distinct fund categories.',
      'Established a repeatable fintech AI eval rubric covering accuracy, citation fidelity, decimal precision, and safe refusal rate.',
    ],
    nextIteration:
      'Add an automated SID-update watcher that re-indexes chunks whenever an AMC publishes an addendum, displaying the exact "as-of" effective date in every response.',
    interviewQuestions: [
      {
        question: 'How do you define success metrics for a regulated fintech AI assistant?',
        strongAnswerOutline: [
          'Lead with safety & trust metrics over engagement: Citation Fidelity Rate, Safe Refusal Recall on adversarial advisory prompts, and Zero-Rounding Numerical Accuracy.',
          'Secondary UX metric: Self-serve factual resolution rate without escalating to human support.',
        ],
      },
    ],
  },
  {
    id: 'embee-gtm-suite',
    index: '04',
    title: 'Embee GTM Content & Keyword Lab Suite',
    subtitle: 'End-to-end 0-to-1 workflow connecting SEO/GEO keyword intelligence, drafting, rule checks, and CMO revision loops.',
    category: 'workflow-0to1',
    categoryLabel: '0-to-1 Workflows',
    role: 'Product Owner & Workflow Architect',
    timeframe: 'Sep–Nov 2026 · Internal Product Suite',
    stackSummary: 'TypeScript · Next.js · DataForSEO · Claude Artifacts · Google Drive Export',
    repoUrl: 'https://github.com/RubyGoyal/embee-blog-studio',
    liveUrl: 'https://rubygoyal.github.io/embee-blog-studio/',
    imageKey: 'content-suite',
    featured: false,
    headlineMetric: { value: '4-Stage Flow', label: 'Brief → Competitor Research → Draft → CMO Diff' },
    secondaryMetrics: [
      { value: '15 + 13', label: 'Content rules & structure checks automated' },
      { value: '3 Channels', label: 'Website Blog, Guest Post, LinkedIn Pulse' },
      { value: 'MQL Scoring', label: 'Topic clusters & Indian B2B search intent' },
    ],
    problemStatement:
      'B2B content teams juggle disconnected SEO tools, messy Google Docs, and vague CMO feedback emails. Writers break subtle style rules (em-dashes, unapproved brand terms, missing links), and revisions silently introduce new regressions.',
    targetUsers:
      'In-house B2B content strategists, technical writers, and executive marketing reviewers.',
    productDecisions: [
      {
        decision: 'Built-in automated sanity check + word-level diff after CMO feedback',
        alternativeRejected: 'One-shot AI draft generation without revision tracking',
        rationale:
          'Executive feedback often breaks structural or brand rules during rewrites; auto-repairing failed rules post-revision and generating a Change Log closed the loop.',
      },
      {
        decision: 'Unified SEO, AEO, and GEO keyword scoring tailored to the Indian B2B market',
        alternativeRejected: 'Generic global search-volume keyword lists',
        rationale:
          'Embee Keyword Lab scores keywords by commercial MQL intent and topic clusters rather than vanity traffic, directly aligning content production with enterprise pipeline.',
      },
    ],
    executionArchitecture: [
      'Embee Blog Studio spans 4 stages (Brief, Parallel Search Competitor Research, Draft, Feedback) with bulk CSV/Excel queue execution and `.docx`/`.md` Google Drive export.',
      'Embee Keyword Lab proxies DataForSEO credentials securely on Vercel server routes (`/api/keywords`) so team members can run research via a shared URL without exposing API keys.',
      'Companion builders (`Blog-Content-Studio`, `Website-Copy-Builder`) modularize multi-channel copy and landing-page messaging.',
    ],
    outcomesAndEvidence: [
      'Shipped a public interactive preview at `rubygoyal.github.io/embee-blog-studio/` allowing stakeholders to inspect screens, rules, and spreadsheet bulk upload.',
      'Standardized 15 editorial rules and 13 structural checks across website, guest, and LinkedIn Pulse formats.',
    ],
    nextIteration:
      'Consolidate the standalone prototypes (`Blog-Content-Studio`, `Website-Copy-Builder`, `keyword`, `embee-blog-studio`) into a single unified content OS with shared brand rules and DataForSEO topic triggers.',
    interviewQuestions: [
      {
        question: 'You built 4 separate content/SEO tools. As a PM, would you keep them separate or consolidate?',
        strongAnswerOutline: [
          'Explain why rapid 0-to-1 prototyping justified separate tools (fast validation per persona: SEO analyst vs. blog writer vs. copywriter).',
          'Now that workflows are validated, the clear platform play is consolidating shared brand dictionaries, brief intake, and eval rules into one unified pipeline.',
        ],
      },
    ],
  },
];

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    index: '01',
    title: 'Product Discovery & PRDs',
    summary:
      'Translating ambiguous stakeholder requests into crisp problem statements, PRDs, user stories, acceptance criteria, and docs-as-code workflows.',
    evidence: '8+ years lead technical writing & product discovery',
  },
  {
    index: '02',
    title: 'B2B SaaS, Cloud & Enterprise',
    summary:
      'Deep practical context across enterprise IT buying cycles, Microsoft Cloud, SAP Business One, cybersecurity, and partner GTM motions.',
    evidence: 'Product Marketing at Embee Software (2,500+ enterprise orgs)',
  },
  {
    index: '03',
    title: 'AI Evaluation & Guardrails',
    summary:
      'Designing hybrid deterministic + LLM architectures with offline eval suites, strict citation contracts, and regulatory refusal boundaries.',
    evidence: '158 automated checks on Signalpost · SEBI guardrails on Groww Assist',
  },
  {
    index: '04',
    title: 'Data & Lean Process Rigor',
    summary:
      'Applying SQL fundamentals, KPI/funnel thinking, MQL intent scoring, and continuous process improvement to eliminate workflow bottlenecks.',
    evidence: 'Lean Six Sigma Yellow Belt · Geekflare, DZone, HackerNoon, SAP author',
  },
];

export const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    id: 'ai-pm',
    label: 'AI Product Manager',
    targetRoles: 'AI PM · Applied AI / LLM Platform PM · Search & RAG PM',
    leadCaseStudyIds: ['signalpost', 'groww-assist'],
    sixtySecondPitch:
      "I'm a Technical Product Manager with 8+ years in B2B cloud and enterprise software, and over the past year I've built and shipped end-to-end AI products focused on accuracy, evals, and unit economics. For example, on Signalpost, I chose a deterministic verification architecture with 158 offline eval checks over naive LLM scraping—delivering 60,261 evidence-linked company facts across 1,000 companies at $0 inference cost and 93% human-audited precision. On Groww Assist, I designed a SEBI-compliant RAG assistant with strict domain allowlists and safe refusals. My edge is combining deep customer empathy from 8 years in B2B GTM with hands-on technical fluency in TypeScript, RAG guardrails, and evaluation harnesses.",
    keyProofPoints: [
      'Lead with trade-offs: why deterministic rules beat LLMs on Signalpost ($0/run, 360s) and why hybrid rules + Claude Sonnet 4.5 worked for EmbeeContentIQ.',
      'Highlight evaluation maturity: 158 offline checks, Momentic live QA loop, and multi-tier decimal precision tests on Groww Liquid Fund.',
      'Emphasize compliance & safety: distinguishing `growwmf.in` vs `groww.in` under SEBI regulations.',
    ],
  },
  {
    id: 'b2b-saas-pm',
    label: 'B2B SaaS / Growth PM',
    targetRoles: 'B2B SaaS PM · MarTech / Content Platform PM · Product Growth PM',
    leadCaseStudyIds: ['embee-content-iq', 'embee-gtm-suite'],
    sixtySecondPitch:
      "I bring 8+ years inside B2B IT and cloud ecosystems at Embee Software—bridging product marketing, enterprise positioning across Microsoft and SAP, and lead technical writing—now paired with building internal SaaS tools from 0 to 1. Seeing our teams lose hours in disconnected SEO briefs, trademark compliance checks, and CMO review loops, I built EmbeeContentIQ (a Next.js audit platform encoding 22 canonical product rules and conversion proof points) and Embee Keyword Lab (scoring Indian B2B search intent by MQL potential). I understand both what makes enterprise buyers convert and how to ship software workflows that eliminate internal friction.",
    keyProofPoints: [
      'Connect every feature to GTM pipeline: MQL scoring, conversion proof points (2,500+ orgs, 34+ yrs), and faster campaign cycle time.',
      'Show customer discovery from lived workflow pain: solving CMO revision regressions with word-level diffs and auto-repair.',
      'Mention Lean Six Sigma Yellow Belt as your structured framework for diagnosing workflow waste.',
    ],
  },
  {
    id: 'technical-pm',
    label: 'Technical / Platform PM',
    targetRoles: 'Technical PM · Developer / Docs-as-Code PM · Data Platform PM',
    leadCaseStudyIds: ['signalpost', 'embee-content-iq'],
    sixtySecondPitch:
      "I'm a Technical Product Manager with a foundation in lead technical writing, enterprise cloud ecosystems, and full-stack TypeScript prototyping. Across Geekflare, DZone, HackerNoon, and SAP, I've translated complex infrastructure into clear developer and buyer adoption—and in my product builds, I write specs and ship working Next.js and Node.js systems myself. Whether architecting server-side CORS-free document parsers in EmbeeContentIQ or designing an auditable 1,000-company data pipeline with GitHub Actions CI and 158 regression tests in Signalpost, I partner seamlessly with engineering on API contracts, edge cases, and measurable reliability.",
    keyProofPoints: [
      'Highlight docs-as-code, GitHub Actions CI runs, server-side API proxies (`/api/keywords`, `/api/parse-file`), and TypeScript modularity.',
      'Explain how your technical writing background makes your PRDs and acceptance criteria unusually crisp for engineering teams.',
      'Use Signalpost v5 feedback-to-regression-test loop to demonstrate disciplined product quality ownership.',
    ],
  },
];

export const GITHUB_AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'audit-keyword-security',
    priority: 'Urgent',
    repoName: 'keyword',
    finding:
      'The README publicly displays a team email (`ruby.goyal@embee.co.in`) and references resetting a DataForSEO password that was "shared in chat".',
    actionToTake:
      'Confirm git commit history contains no API keys, rotate the DataForSEO password if not already done, and replace the deployment-warning README with a clean PM case study + redacted `.env.example`.',
    interviewImpact:
      'Hiring managers and technical interviewers frequently click repo links; removing sensitive operational notes protects your credibility and security hygiene.',
  },
  {
    id: 'audit-missing-readmes',
    priority: 'High',
    repoName: 'Blog-Content-Studio & Website-Copy-Builder',
    finding:
      'Both repositories currently have no `README.md` (returning 404), and `Blog-Content-Studio` has a typo ("gutes posts") in its GitHub description.',
    actionToTake:
      'Fix the description typo to "guest posts" and add a concise 5-part PM README (Problem, User Flow, Architecture, Key Decisions, Next Steps) — or archive/consolidate them under a single suite overview if superseded by `embee-blog-studio`.',
    interviewImpact:
      'A featured repo on your profile README without a README.md looks unfinished to a recruiter spending 30 seconds scanning your GitHub.',
  },
  {
    id: 'audit-business-outcomes',
    priority: 'High',
    repoName: 'embee-content-iq-v4 & Groww-Assist-Gemini',
    finding:
      'Both have strong technical READMEs, but lack visual screenshots/walkthroughs and explicit business/product KPIs (e.g., time saved per audit, eval pass rate table).',
    actionToTake:
      'Add 2 annotated UI screenshots (like `embee-blog-studio` already has with `docs/draft.png`), a "Product Metrics & Guardrails" table, and a 3-bullet "v2 Roadmap" section.',
    interviewImpact:
      'Transforms code repositories into unmistakable Product Management artifacts within the first scroll.',
  },
  {
    id: 'audit-live-demos',
    priority: 'Medium',
    repoName: 'embee-content-iq-v4 & Groww-Assist-Gemini',
    finding:
      '`signalpost` and `embee-blog-studio` have working live links, while `embee-content-iq-v4` and `Groww-Assist-Gemini` require cloning locally to view.',
    actionToTake:
      'Deploy `embee-content-iq-v4` to Vercel (it already works in zero-API-key mode!) and pin its live URL in the GitHub repo "About" sidebar.',
    interviewImpact:
      'Lets non-technical PM interviewers test your product live in 10 seconds during or before a screen.',
  },
];

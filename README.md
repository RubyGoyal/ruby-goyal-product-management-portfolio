# Ruby Goyal — Technical Product Management Portfolio

Interactive Product Management portfolio built for B2B SaaS, Cloud, and Applied AI PM interviews. Frames shipped TypeScript and AI projects as structured PM case studies covering problem statements, target users, product trade-offs, evaluation metrics, and `v+1` roadmaps.

## What's Inside

- **Selected PM Case Studies & Filterable Grid**: Filter across *All Work*, *AI & Evaluation*, *Enterprise SaaS*, and *0-to-1 Workflows*, covering:
  - **Signalpost** — Deterministic Norwegian company intelligence pipeline (`1,000/1,000` envelopes, `60,261` evidence-linked facts, `$0/run`, `158` offline checks).
  - **EmbeeContentIQ** — Next.js enterprise B2B content audit platform (`22` canonical product rules, URL/DOCX/PDF parsing, deterministic scoring + selective Claude rewrites).
  - **Groww Assist** — Facts-only mutual fund RAG assistant (`growwmf.in`/SEBI/AMFI domain allowlist, safe compliance refusals, multi-tier decimal precision).
  - **Embee GTM Content & Keyword Lab Suite** — End-to-end brief, competitor research, rule check, CMO revision diff, and MQL keyword scoring workflow.
- **Interactive Case Study Deep-Dive Modal**: Tabbed breakdown of *Problem & Trade-offs*, *Execution & Evidence*, and *Interview Q&A*, with keyboard navigation (`Esc`) and previous/next case study switching.
- **Role-Based Interview Pitch Switcher**: Tailored 60-second *"Tell me about yourself"* scripts and lead case studies for *AI PM*, *B2B SaaS / Growth PM*, and *Technical / Platform PM* tracks.
- **Pre-Interview GitHub Audit Checklist**: Interactive readiness tracker with `localStorage` persistence.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons
- **Testing**: Node built-in test runner (`node:test`) via `tsx`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` — Start local development server on port `3000`
- `npm run build` — Build production bundle with Vite
- `npm run lint` — Run TypeScript type check (`tsc --noEmit`)
- `npx tsx --test src/utils/portfolioLogic.test.ts` — Run unit tests for filtering, navigation, and readiness progress logic

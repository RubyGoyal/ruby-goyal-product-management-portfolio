# Ruby Goyal — Technical Product Management Portfolio

Product Management portfolio showcasing B2B SaaS, Cloud, and Applied AI case studies. Frames shipped TypeScript and AI projects around problem statements, target users, product trade-offs, architecture, evaluation metrics, and `v+1` roadmaps.

## Highlights

- **Selected PM Case Studies & Filterable Grid**: Filter across *All Work*, *AI & Evaluation*, *Enterprise SaaS*, and *0-to-1 Workflows*, covering:
  - **Signalpost** — Deterministic Norwegian company intelligence pipeline (`1,000/1,000` envelopes, `60,261` evidence-linked facts, `$0/run`, `158` offline checks).
  - **EmbeeContentIQ** — Next.js enterprise B2B content audit platform (`22` canonical product rules, URL/DOCX/PDF parsing, deterministic scoring + selective Claude rewrites).
  - **Groww Assist** — Facts-only mutual fund RAG assistant (`growwmf.in`/SEBI/AMFI domain allowlist, safe compliance refusals, multi-tier decimal precision).
  - **Embee GTM Content & Keyword Lab Suite** — End-to-end brief, competitor research, rule check, CMO revision diff, and MQL keyword scoring workflow.
- **Interactive Case Study Reader**: Tabbed breakdown of *Problem & Trade-offs* and *Execution & Evidence*, with keyboard navigation (`Esc`) and previous/next case study switching.
- **PM Approach & Domain Toolkit**: 8+ years across B2B IT, cloud ecosystems, product marketing at Embee Software, Lean Six Sigma Yellow Belt, and published technical writing (Geekflare, DZone, HackerNoon, SAP).

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
- `npx tsx --test src/utils/portfolioLogic.test.ts` — Run unit tests for case study filtering and navigation logic

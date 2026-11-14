import type { CaseCategory, CaseStudy, FilterCategory } from '../data/portfolioData';

export function filterCaseStudies(
  studies: CaseStudy[],
  filter: FilterCategory
): CaseStudy[] {
  if (filter === 'all') {
    return studies;
  }
  return studies.filter((study) => study.category === filter);
}

export function getAdjacentCaseStudies(
  studies: CaseStudy[],
  currentId: string
): { previous: CaseStudy | null; next: CaseStudy | null } {
  const index = studies.findIndex((study) => study.id === currentId);
  if (index === -1 || studies.length <= 1) {
    return { previous: null, next: null };
  }
  const previous = studies[(index - 1 + studies.length) % studies.length];
  const next = studies[(index + 1) % studies.length];
  return { previous, next };
}

export function getCategoryCounts(
  studies: CaseStudy[]
): Record<FilterCategory, number> {
  const counts: Record<CaseCategory, number> = {
    'ai-eval': 0,
    'enterprise-saas': 0,
    'workflow-0to1': 0,
  };
  for (const study of studies) {
    counts[study.category] += 1;
  }
  return {
    all: studies.length,
    ...counts,
  };
}

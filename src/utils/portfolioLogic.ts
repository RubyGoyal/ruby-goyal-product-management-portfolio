import type {
  AuditItem,
  CaseStudy,
  FilterCategory,
  InterviewTrack,
  InterviewTrackId,
} from '../data/portfolioData';

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

export function getInterviewTrack(
  tracks: InterviewTrack[],
  trackId: InterviewTrackId
): InterviewTrack {
  return tracks.find((t) => t.id === trackId) ?? tracks[0];
}

export function computeReadinessProgress(
  items: AuditItem[],
  completedIds: string[]
): { completedCount: number; totalCount: number; percent: number } {
  if (items.length === 0) {
    return { completedCount: 0, totalCount: 0, percent: 100 };
  }
  const validIds = new Set(items.map((item) => item.id));
  const uniqueCompleted = new Set(completedIds.filter((id) => validIds.has(id)));
  const completedCount = uniqueCompleted.size;
  const totalCount = items.length;
  const percent = Math.round((completedCount / totalCount) * 100);
  return { completedCount, totalCount, percent };
}

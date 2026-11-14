import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CASE_STUDIES,
  GITHUB_AUDIT_ITEMS,
  INTERVIEW_TRACKS,
} from '../data/portfolioData';
import {
  computeReadinessProgress,
  filterCaseStudies,
  getAdjacentCaseStudies,
  getInterviewTrack,
} from './portfolioLogic';

test('filterCaseStudies returns all studies when filter is all', () => {
  const result = filterCaseStudies(CASE_STUDIES, 'all');
  assert.equal(result.length, CASE_STUDIES.length);
});

test('filterCaseStudies narrows studies by category accurately', () => {
  const aiStudies = filterCaseStudies(CASE_STUDIES, 'ai-eval');
  assert.equal(aiStudies.length, 2);
  assert.ok(aiStudies.every((s) => s.category === 'ai-eval'));

  const saasStudies = filterCaseStudies(CASE_STUDIES, 'enterprise-saas');
  assert.equal(saasStudies.length, 1);
  assert.equal(saasStudies[0].id, 'embee-content-iq');
});

test('getAdjacentCaseStudies wraps cleanly at list boundaries', () => {
  const first = getAdjacentCaseStudies(CASE_STUDIES, CASE_STUDIES[0].id);
  assert.equal(first.previous?.id, CASE_STUDIES[CASE_STUDIES.length - 1].id);
  assert.equal(first.next?.id, CASE_STUDIES[1].id);

  const missing = getAdjacentCaseStudies(CASE_STUDIES, 'non-existent');
  assert.equal(missing.previous, null);
  assert.equal(missing.next, null);
});

test('getInterviewTrack returns requested track or falls back to first', () => {
  const b2b = getInterviewTrack(INTERVIEW_TRACKS, 'b2b-saas-pm');
  assert.equal(b2b.id, 'b2b-saas-pm');
  assert.ok(b2b.leadCaseStudyIds.includes('embee-content-iq'));
});

test('computeReadinessProgress deduplicates valid ids and ignores stale ids', () => {
  const progress = computeReadinessProgress(GITHUB_AUDIT_ITEMS, [
    'audit-keyword-security',
    'audit-keyword-security',
    'unknown-id',
  ]);
  assert.equal(progress.completedCount, 1);
  assert.equal(progress.totalCount, GITHUB_AUDIT_ITEMS.length);
  assert.equal(
    progress.percent,
    Math.round((1 / GITHUB_AUDIT_ITEMS.length) * 100)
  );
});

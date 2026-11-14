import test from 'node:test';
import assert from 'node:assert/strict';
import { CASE_STUDIES } from '../data/portfolioData';
import {
  filterCaseStudies,
  getAdjacentCaseStudies,
  getCategoryCounts,
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

test('getCategoryCounts totals match total case studies', () => {
  const counts = getCategoryCounts(CASE_STUDIES);
  assert.equal(counts.all, CASE_STUDIES.length);
  assert.equal(
    counts['ai-eval'] + counts['enterprise-saas'] + counts['workflow-0to1'],
    counts.all
  );
});

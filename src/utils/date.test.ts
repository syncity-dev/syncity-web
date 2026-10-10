import { describe, expect, it } from 'vitest';

import { formatPostDate } from './date';

describe('formatPostDate', () => {
  it('formats the short and long forms', () => {
    expect(formatPostDate('2026-10-07')).toBe('Oct 7, 2026');
    expect(formatPostDate('2026-10-07', 'long')).toBe('October 7, 2026');
  });

  it('keeps the same day in time zones behind UTC', () => {
    expect(formatPostDate('2026-01-01')).toBe('Jan 1, 2026');
  });
});

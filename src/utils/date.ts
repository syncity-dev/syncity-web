const formats = {
  short: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }),
  long: new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }),
};

/**
 * Formats a `YYYY-MM-DD` date as "Oct 7, 2026" (short) or "October 7, 2026" (long).
 * The time zone is fixed to UTC so the prerendered HTML and the browser show the same day.
 */
export const formatPostDate = (isoDate: string, format: keyof typeof formats = 'short') =>
  formats[format].format(new Date(isoDate));

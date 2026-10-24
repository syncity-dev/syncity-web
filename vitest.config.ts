import path from 'path';
import { defineConfig } from 'vitest/config';

// Run tests in a time zone behind UTC, where a date like 2026-01-01 turns into Dec 31 unless
// the code fixes the time zone. Our laptops are ahead of UTC and would hide that bug.
process.env.TZ = 'America/New_York';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve('./src') },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});

export const animations = {
  'fade-in': { value: 'fade-in 0.5s var(--ease-out)' },
  'fade-out': { value: 'fade-out 0.5s var(--elastic-out)' },
  'slide-in-from-top': { value: 'slide-from-top-full 0.6s var(--ease-out)' },
  'slide-in-from-bottom': { value: 'slide-from-bottom-full 0.6s var(--ease-out)' },
  'slide-in-from-right': {
    value: 'slide-from-right-full 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
  'slide-out-to-right': { value: 'slide-to-right-full 0.9s var(--elastic-out)' },
  spin: { value: 'spin 1s linear infinite' },
  'infinite-scroll': { value: 'infinite-scroll 50s linear infinite' },
  pulse: { value: 'pulse 2.2s ease-out infinite' },
  ping: { value: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' },
} as const;

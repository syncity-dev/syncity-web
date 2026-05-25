export const animations = {
  enter: { value: 'enter 0.5s var(--ease-out)' },
  exit: { value: 'exit 0.5s var(--elastic-out)' },
  fadeIn: { value: 'fadeIn 0.5s var(--ease-out)' },
  fadeOut: { value: 'fadeOut 0.5s var(--elastic-out)' },
  slideInFromTop: { value: 'slideInFromTop 0.6s var(--ease-out)' },
  slideInFromBottom: { value: 'slideInFromBottom 0.6s var(--ease-out)' },
  slideInFromRight: { value: 'slideInFromRight 0.28s cubic-bezier(0.2, 0.8, 0.2, 1)' },
  slideOutToRight: { value: 'slideOutToRight 0.9s var(--elastic-out)' },
  spin: { value: 'spin 1s linear infinite' },
  'infinite-scroll': { value: 'infinite-scroll 50s linear infinite' },
  pulse: { value: 'pulse 2.2s ease-out infinite' },
  ping: { value: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' },
} as const;

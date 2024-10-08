export const animations = {
  enter: { value: "enter 0.5s var(--ease-out)" },
  exit: { value: "exit 0.5s var(--elastic-out)" },
  fadeIn: { value: "fadeIn 0.5s var(--ease-out)" },
  fadeOut: { value: "fadeOut 0.5s var(--elastic-out)" },
  slideInFromTop: { value: "slideInFromTop 0.6s var(--ease-out)" },
  slideInFromBottom: { value: "slideInFromBottom 0.6s var(--ease-out)" },
  slideOutToRight: { value: "slideOutToRight 0.9s var(--elastic-out)" },
  spin: { value: "spin 1s linear infinite" },
} as const;

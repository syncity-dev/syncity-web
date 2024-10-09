export const keyframes = {
  enter: {
    from: {
      opacity: "var(--enter-opacity, 1)",
      transform:
        "translate3d(var(--enter-translate-x, 0), var(--enter-translate-y, 0), 0) scale3d(var(--enter-scale, 1), var(--enter-scale, 1), var(--enter-scale, 1)) rotate(var(--enter-rotate, 0))",
    },
  },
  exit: {
    to: {
      opacity: "var(--exit-opacity, 1)",
      transform:
        "translate3d(var(--exit-translate-x, 0), var(--exit-translate-y, 0), 0) scale3d(var(--exit-scale, 1), var(--exit-scale, 1), var(--exit-scale, 1)) rotate(var(--exit-rotate, 0))",
    },
  },
  fadeIn: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  fadeOut: {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
  slideInFromTop: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(0)" },
  },
  slideInFromBottom: {
    "0%": { transform: "translateY(1000%)" },
    "100%": { transform: "translateY(0)" },
  },
  slideOutToRight: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(120%)" },
  },
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
} as const;

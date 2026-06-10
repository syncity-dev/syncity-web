import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  // expand / collapse
  'expand-height': {
    from: { height: '0' },
    to: { height: 'var(--height)' },
  },
  'collapse-height': {
    from: { height: 'var(--height)' },
    to: { height: '0' },
  },
  'expand-width': {
    from: { width: '0' },
    to: { width: 'var(--width)' },
  },
  'collapse-width': {
    from: { width: 'var(--width)' },
    to: { width: '0' },
  },
  // fade
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  // slide from (full)
  'slide-from-top-full': {
    from: { translate: '0 -100%' },
    to: { translate: '0 0' },
  },
  'slide-from-bottom-full': {
    from: { translate: '0 100%' },
    to: { translate: '0 0' },
  },
  'slide-from-left-full': {
    from: { translate: '-100% 0' },
    to: { translate: '0 0' },
  },
  'slide-from-right-full': {
    from: { translate: '100% 0' },
    to: { translate: '0 0' },
  },
  // slide to (full)
  'slide-to-top-full': {
    from: { translate: '0 0' },
    to: { translate: '0 -100%' },
  },
  'slide-to-bottom-full': {
    from: { translate: '0 0' },
    to: { translate: '0 100%' },
  },
  'slide-to-left-full': {
    from: { translate: '0 0' },
    to: { translate: '-100% 0' },
  },
  'slide-to-right-full': {
    from: { translate: '0 0' },
    to: { translate: '100% 0' },
  },
  // slide from (micro-offset)
  'slide-from-top': {
    '0%': { translate: '0 -0.5rem' },
    to: { translate: '0' },
  },
  'slide-from-bottom': {
    '0%': { translate: '0 0.5rem' },
    to: { translate: '0' },
  },
  'slide-from-left': {
    '0%': { translate: '-0.5rem 0' },
    to: { translate: '0' },
  },
  'slide-from-right': {
    '0%': { translate: '0.5rem 0' },
    to: { translate: '0' },
  },
  // slide to (micro-offset)
  'slide-to-top': {
    '0%': { translate: '0' },
    to: { translate: '0 -0.5rem' },
  },
  'slide-to-bottom': {
    '0%': { translate: '0' },
    to: { translate: '0 0.5rem' },
  },
  'slide-to-left': {
    '0%': { translate: '0' },
    to: { translate: '-0.5rem 0' },
  },
  'slide-to-right': {
    '0%': { translate: '0' },
    to: { translate: '0.5rem 0' },
  },
  // scale
  'scale-in': {
    from: { scale: '0.95' },
    to: { scale: '1' },
  },
  'scale-out': {
    from: { scale: '1' },
    to: { scale: '0.95' },
  },
  // utility
  'bg-position': {
    from: { backgroundPosition: 'var(--animate-from, 1rem) 0' },
    to: { backgroundPosition: 'var(--animate-to, 0) 0' },
  },
  position: {
    from: {
      insetInlineStart: 'var(--animate-from-x)',
      insetBlockStart: 'var(--animate-from-y)',
    },
    to: {
      insetInlineStart: 'var(--animate-to-x)',
      insetBlockStart: 'var(--animate-to-y)',
    },
  },
  // continuous
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'infinite-scroll': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' },
  },
  pulse: {
    '0%': {
      boxShadow: '0 0 0 0 color-mix(in srgb, var(--colors-success-default) 60%, transparent)',
    },
    '70%': {
      boxShadow: '0 0 0 8px color-mix(in srgb, var(--colors-success-default) 0%, transparent)',
    },
    '100%': {
      boxShadow: '0 0 0 0 color-mix(in srgb, var(--colors-success-default) 0%, transparent)',
    },
  },
  ping: {
    '75%, 100%': { transform: 'scale(2.5)', opacity: '0' },
  },
  'section-reveal': {
    from: { opacity: '0', translate: '0 20px' },
    to: { opacity: '1', translate: '0 0' },
  },
});

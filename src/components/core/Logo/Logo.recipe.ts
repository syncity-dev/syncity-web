import { css, cva } from '@/styled-system/css';

export const logo = cva({
  base: {
    display: 'block',
    flexShrink: '0',
    rounded: 'l2',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'accent.default',
      outlineOffset: '2px',
    },
  },
  variants: {
    size: {
      sm: { width: '28' },
      md: { width: '44' },
      lg: { width: '72' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const lightVariant = css({ _dark: { display: 'none' } });
export const darkVariant = css({
  display: 'none',
  _dark: { display: 'block' },
});

import { css, cva } from '@/styled-system/css';

export const logo = cva({
  base: {
    display: 'block',
    flexShrink: '0',
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

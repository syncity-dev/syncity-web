import { cva } from '@/styled-system/css';

export const diamond = cva({
  base: {
    display: 'inline-block',
    w: '2',
    h: '2',
    flexShrink: 0,
    transform: 'rotate(45deg)',
  },
  defaultVariants: {
    variant: 'solid',
  },
  variants: {
    variant: {
      solid: {
        bg: 'accent.default',
      },
      outline: {
        bg: 'transparent',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'accent.default',
      },
    },
  },
});

import { defineRecipe } from '@pandacss/dev';

import { focusRing } from '@/theme/focus';
import { textTransition } from '@/theme/motion/transitions';

export const link = defineRecipe({
  className: 'link',
  base: {
    cursor: 'pointer',
    fontFamily: 'body',
    ...textTransition,
    _focusVisible: { ...focusRing, rounded: 'l1' },
  },
  defaultVariants: {
    visual: 'underline',
  },
  variants: {
    visual: {
      underline: {
        color: 'accent.text',
        textDecoration: 'underline',
        textDecorationColor: 'accent.muted',
        textUnderlineOffset: '3px',
        _hover: {
          color: 'accent.default',
          textDecorationColor: 'accent.default',
        },
      },
      plain: {
        color: 'fg.default',
        textDecoration: 'none',
        _hover: {
          color: 'accent.default',
        },
      },
      subtle: {
        color: 'fg.muted',
        textDecoration: 'none',
        _hover: {
          color: 'accent.default',
        },
      },
    },
  },
});

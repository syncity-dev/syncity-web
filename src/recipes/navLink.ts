import { defineRecipe } from '@pandacss/dev';

import { interactiveTransition } from '@/theme/motion/transitions';

export const navLink = defineRecipe({
  className: 'nav-link',
  base: {
    fontFamily: 'body',
    fontWeight: 'medium',
    textStyle: 'sm',
    color: 'fg.muted',
    textDecoration: 'none',
    py: '2',
    px: '3.5',
    rounded: 'l4',
    ...interactiveTransition,
    _hover: { bg: 'bg.muted', color: 'fg.default' },
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'accent.default',
      outlineOffset: '2px',
    },
  },
});

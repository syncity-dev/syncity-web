import { defineRecipe } from '@pandacss/dev';

import { focusRing } from '@/theme/focus';

export const logo = defineRecipe({
  className: 'logo',
  base: {
    display: 'block',
    flexShrink: '0',
    rounded: 'l2',
    _focusVisible: focusRing,
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: { width: '28' },
      md: { width: '44' },
      lg: { width: '72' },
    },
  },
});

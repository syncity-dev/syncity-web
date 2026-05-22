import { defineRecipe } from '@pandacss/dev';

export const logo = defineRecipe({
  className: 'logo',
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

import { defineRecipe } from '@pandacss/dev';

export const text = defineRecipe({
  className: 'text',
  base: {},
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        label: { fontSize: 'sm' },
      },
      md: {
        label: { fontSize: 'md' },
      },
      lg: {
        label: { fontSize: 'lg' },
      },
    },
    as: {
      p: { fontFamily: 'body' },
      label: { fontFamily: 'body' },
      small: { fontFamily: 'body' },
    },
  },
});

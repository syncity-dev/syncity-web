import { defineRecipe } from '@pandacss/dev';

export const heading = defineRecipe({
  className: 'heading',
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    color: 'fg.default',
    letterSpacing: 'wide',
  },
  defaultVariants: {
    as: 'h2',
  },
  variants: {
    as: {
      h1: { textStyle: '5xl' },
      h2: { textStyle: '4xl' },
      h3: { textStyle: '3xl' },
      h4: { textStyle: '2xl' },
      h5: { textStyle: 'xl' },
      h6: { textStyle: 'lg' },
    },
  },
});

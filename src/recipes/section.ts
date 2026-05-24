import { defineRecipe } from '@pandacss/dev';

export const section = defineRecipe({
  className: 'section',
  base: {
    position: 'relative',
    py: { base: '16', md: '24' },
  },
  variants: {
    divided: {
      true: {
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'border.default',
      },
    },
  },
});

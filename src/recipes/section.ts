import { defineRecipe } from '@pandacss/dev';

export const section = defineRecipe({
  className: 'section',
  base: {
    position: 'relative',
    my: { base: '16', md: '20' },
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

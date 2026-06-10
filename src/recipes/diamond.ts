import { defineRecipe } from '@pandacss/dev';

export const diamond = defineRecipe({
  className: 'diamond',
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

import { defineSlotRecipe } from '@pandacss/dev';

import { focusRing } from '@/theme/focus';

export const textArea = defineSlotRecipe({
  className: 'text-area',
  slots: ['control'],
  base: {
    control: {
      fontFamily: 'body',
      borderWidth: '1px',
      borderColor: 'border.default',
      bgColor: 'bg.default',
      color: 'fg.default',
      rounded: 'l4',
      _placeholder: {
        color: 'fg.subtle',
      },
      _focusVisible: focusRing,
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: '2', paddingBlock: '2', fontSize: 'sm' },
      },
      md: {
        control: { paddingInline: '3', paddingBlock: '4', fontSize: 'md' },
      },
      lg: {
        control: { paddingInline: '4', paddingBlock: '5', fontSize: 'lg' },
      },
    },
  },
});

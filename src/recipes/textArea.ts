import { defineSlotRecipe } from '@pandacss/dev';

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
      rounded: 'sm',
      outlineOffset: '1',
      outlineColor: 'accent.emphasis',
      _placeholder: {
        color: 'fg.subtle',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: '1', paddingBlock: '1', fontSize: 'sm' },
      },
      md: {
        control: { paddingInline: '2', paddingBlock: '2', fontSize: 'md' },
      },
      lg: {
        control: { paddingInline: '4', paddingBlock: '4', fontSize: 'lg' },
      },
    },
  },
});

import { cva } from '@/styled-system/css';

export const section = cva({
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

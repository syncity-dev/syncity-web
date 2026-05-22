import { sva } from '@/styled-system/css';

export const dialog = sva({
  slots: ['backdrop', 'positioner', 'content', 'header', 'body', 'footer', 'title'],
  base: {
    backdrop: {
      position: 'fixed',
      inset: 0,
      zIndex: 'overlay',
      bg: 'black.a6',
      _open: { animation: 'fadeIn 0.25s ease both' },
      _closed: { animation: 'fadeOut 0.25s ease both' },
      _motionReduce: { animation: 'none' },
    },
    positioner: {
      position: 'fixed',
      inset: 0,
      zIndex: 'overlay',
      pointerEvents: 'none',
    },
    content: {
      bg: 'bg.default',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      _motionReduce: { animation: 'none' },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: '5',
      py: '4',
      borderBottomWidth: 'thin',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border.default',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflowY: 'auto',
      px: '2',
      py: '3',
    },
    footer: {
      px: '5',
      pt: '4',
      pb: '6',
      borderTopWidth: 'thin',
      borderTopStyle: 'solid',
      borderTopColor: 'border.default',
    },
    title: {
      srOnly: true,
    },
  },
  variants: {
    placement: {
      right: {
        content: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          w: 'full',
          boxShadow: '-16px 0 40px -20px rgba(20,21,26,0.2)',
          _open: { animation: 'slideInFromRight 0.28s cubic-bezier(0.2, 0.8, 0.2, 1) both' },
          _closed: { animation: 'slideOutToRight 0.28s cubic-bezier(0.2, 0.8, 0.2, 1) both' },
        },
      },
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});

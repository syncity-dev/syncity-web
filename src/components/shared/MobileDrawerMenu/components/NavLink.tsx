import { css, cx } from '@/styled-system/css';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { interactiveTransition } from '@/theme/motion/transitions';

const navLinkClass = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4',
  px: '4',
  py: '5',
  textStyle: '2xl',
  fontFamily: 'heading',
  fontWeight: 'semibold',
  letterSpacing: '-0.005em',
  color: 'fg.default',
  textDecoration: 'none',
  rounded: 'l3',
  ...interactiveTransition,
  _hover: { bg: 'bg.muted' },
  _focusVisible: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'accent.default',
    outlineOffset: '2px',
  },
});

const BaseNavLink = styled('a');

export const NavLink = (props: HTMLStyledProps<'a'>) => {
  return <BaseNavLink className={cx(navLinkClass, props.className)} {...props} />;
};

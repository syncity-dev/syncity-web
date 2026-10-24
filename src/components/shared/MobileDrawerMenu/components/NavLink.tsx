import { Link } from '@tanstack/react-router';

import { css, cx } from '@/styled-system/css';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { focusRing } from '@/theme/focus';
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
  _currentPage: { bg: 'bg.muted' },
  _focusVisible: focusRing,
});

const SectionNavLink = styled('a');
const RouteNavLink = styled(Link);

/** Section links (`/#work`) stay plain anchors. Page links like `/blog` navigate in the app without a reload. */
export const NavLink = ({ href = '', className, ...props }: HTMLStyledProps<'a'>) =>
  href.startsWith('/#') ? (
    <SectionNavLink href={href} className={cx(navLinkClass, className)} {...props} />
  ) : (
    <RouteNavLink to={href} className={cx(navLinkClass, className)} {...props} />
  );

import { Link } from '@tanstack/react-router';

import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { navLink } from '@/styled-system/recipes';

const SectionNavLink = styled('a', navLink);
const RouteNavLink = styled(Link, navLink);

/** Section links (`/#work`) stay plain anchors. Page links like `/blog` navigate in the app without a reload. */
export const NavLink = ({ href = '', ...props }: HTMLStyledProps<'a'>) =>
  href.startsWith('/#') ? (
    <SectionNavLink href={href} {...props} />
  ) : (
    <RouteNavLink to={href} {...props} />
  );

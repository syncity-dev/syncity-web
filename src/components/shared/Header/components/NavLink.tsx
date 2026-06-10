import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { navLink } from '@/styled-system/recipes';

const BaseNavLink = styled('a', navLink);

export const NavLink = (props: HTMLStyledProps<'a'>) => {
  return <BaseNavLink {...props} />;
};

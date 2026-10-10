import { useLocation } from '@tanstack/react-router';

import { NavLink } from '@/components/shared/MobileDrawerMenu/components/NavLink';
import { useNavLinks } from '@/hooks/useNavLinks';

interface NavLinksProps {
  onNavLinkClick: () => void;
}

export const NavLinks = ({ onNavLinkClick }: NavLinksProps) => {
  const navLinks = useNavLinks();
  const pathname = useLocation({ select: (location) => location.pathname });

  return navLinks.map(({ id, href, label, Icon }) => (
    <NavLink
      key={id}
      href={href}
      aria-current={pathname.startsWith(href) ? 'page' : undefined}
      onClick={onNavLinkClick}
    >
      <Icon />
      {label}
    </NavLink>
  ));
};

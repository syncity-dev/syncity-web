import { NavLink } from '@/components/shared/MobileDrawerMenu/components/NavLink';
import { NAV_LINKS } from '@/constants/navigation';

interface NavLinksProps {
  onNavLinkClick: () => void;
}

export const NavLinks = ({ onNavLinkClick }: NavLinksProps) =>
  NAV_LINKS.map(({ id, href, label, Icon }) => (
    <NavLink key={id} href={href} onClick={onNavLinkClick}>
      <Icon />
      {label}
    </NavLink>
  ));

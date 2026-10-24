import { NavLink } from '@/components/shared/MobileDrawerMenu/components/NavLink';
import { useNavLinks } from '@/hooks/useNavLinks';

interface NavLinksProps {
  onNavLinkClick: () => void;
}

export const NavLinks = ({ onNavLinkClick }: NavLinksProps) => {
  const navLinks = useNavLinks();

  return navLinks.map(({ id, href, label, Icon, isCurrent }) => (
    <NavLink
      key={id}
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={onNavLinkClick}
    >
      <Icon />
      {label}
    </NavLink>
  ));
};

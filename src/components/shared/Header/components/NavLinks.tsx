import { NavLink } from '@/components/shared/Header/components/NavLink';
import { useNavLinks } from '@/hooks/useNavLinks';
import { Flex } from '@/styled-system/jsx';

export const NavLinks = () => {
  const navLinks = useNavLinks();

  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      gap="1"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
    >
      {navLinks.map(({ id, label, href, isCurrent }) => (
        <NavLink key={id} href={href} aria-current={isCurrent ? 'page' : undefined}>
          {label}
        </NavLink>
      ))}
    </Flex>
  );
};

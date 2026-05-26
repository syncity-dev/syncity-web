import { NavLink } from '@/components/shared/Header/components/NavLink';
import { NAV_LINKS } from '@/constants/navigation';
import { Flex } from '@/styled-system/jsx';

export const NavLinks = () => {
  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      gap="1"
      alignItems="center"
      display={{ base: 'none', sm: 'flex' }}
    >
      {NAV_LINKS.map(({ id, label, href }) => (
        <NavLink key={id} href={href}>
          {label}
        </NavLink>
      ))}
    </Flex>
  );
};

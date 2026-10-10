import { useLocation } from '@tanstack/react-router';

import { NavLink } from '@/components/shared/Header/components/NavLink';
import { useNavLinks } from '@/hooks/useNavLinks';
import { Flex } from '@/styled-system/jsx';

export const NavLinks = () => {
  const navLinks = useNavLinks();
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <Flex
      as="nav"
      aria-label="Main navigation"
      gap="1"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
    >
      {navLinks.map(({ id, label, href }) => (
        <NavLink key={id} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>
          {label}
        </NavLink>
      ))}
    </Flex>
  );
};

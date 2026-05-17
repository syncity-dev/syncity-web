import { ColorModeSwitcher } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher';

import { Logo } from '../core/Logo/Logo';
import { HeaderWrapper } from '../features/Header/HeaderWrapper';
import { NavItems } from '../features/Navigation/NavItems';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavItems gap={10} display={{ base: 'none', md: 'flex' }} />
      <ColorModeSwitcher />
      {/* <MobileDrawerMenu /> */}
    </HeaderWrapper>
  );
};

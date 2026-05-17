import { Menu as MenuIcon, X } from 'lucide-react';

import type { DrawerProps } from '@/components/core/Drawer/Drawer';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/core/Drawer/Drawer';
import { Icon } from '@/components/core/Icon/Icon';
import { Logo } from '@/components/core/Logo/Logo';
import { NavItems } from '@/components/features/Navigation/NavItems';

type MobileDrawerMenuProps = DrawerProps;

export const MobileDrawerMenu = ({ ...restProps }: MobileDrawerMenuProps) => {
  return (
    <Drawer
      direction="right"
      display={{ base: 'block', md: 'none' }}
      alignSelf="center"
      backgroundColor="transparent"
      {...restProps}
    >
      <DrawerTrigger asChild cursor="pointer">
        <Icon size="lg">
          <MenuIcon />
        </Icon>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader display="flex" mt={-8} alignItems="center" justifyContent="flex-end">
          <Logo />
          <DrawerClose mr={-2} cursor="pointer">
            <Icon size="lg">
              <X />
            </Icon>
          </DrawerClose>
        </DrawerHeader>
        <NavItems orientation="vertical" haveIcons={true} size="lg" />
        <DrawerFooter gap={5} />
      </DrawerContent>
    </Drawer>
  );
};

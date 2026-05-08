import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  DrawerTrigger,
} from "@/components/core/Drawer/Drawer";
import { X, Menu as MenuIcon } from "lucide-react";
import { Logo } from "@/components/core/Logo/Logo";
import { NavItems } from "@/components/features/Navigation/NavItems";
import { Icon } from "@/components/core/Icon/Icon";

type MobileDrawerMenuProps = DrawerProps;

export const MobileDrawerMenu = ({ ...restProps }: MobileDrawerMenuProps) => {
  return (
    <Drawer
      direction="right"
      display={{ base: "block", md: "none" }}
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
        <DrawerHeader
          display="flex"
          mt={-8}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Logo />
          <DrawerClose mr={-2} cursor="pointer">
            <Icon size="lg">
              <X />
            </Icon>
          </DrawerClose>
        </DrawerHeader>
        <NavItems orientation="vertical" haveIcons={true} size="lg" />
        <DrawerFooter gap={5}></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

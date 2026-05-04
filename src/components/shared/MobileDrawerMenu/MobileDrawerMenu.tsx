import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  DrawerTrigger,
} from "@/components/core/Drawer/Drawer";
import { LuX, LuMenu } from "react-icons/lu";
import { Logo } from "@/components/core/Logo/Logo";
import { NavItems } from "@/components/features/Navigation/NavItems";

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
        <LuMenu size={36} />
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
            <LuX size={36} />
          </DrawerClose>
        </DrawerHeader>
        <NavItems orientation="vertical" haveIcons={true} size="lg" />
        <DrawerFooter gap={5}></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

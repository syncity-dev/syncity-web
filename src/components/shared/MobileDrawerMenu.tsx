import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerProps,
  DrawerTitle,
  DrawerTrigger,
} from "../core/Drawer/Drawer";
import { Button } from "../core/Button/Button";
import { BiMenu, BiX } from "react-icons/bi";

type MobileDrawerMenuProps = DrawerProps;

export const MobileDrawerMenu = ({ ...restProps }: MobileDrawerMenuProps) => {
  return (
    <Drawer
      direction="right"
      display={{ base: "block", md: "none" }}
      alignSelf="center"
    >
      <DrawerTrigger asChild>
        <BiMenu size={24} />
      </DrawerTrigger>
      <DrawerContent height="100vh">
        <DrawerHeader display="flex">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerClose>
            <BiX size={40} />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter gap={5}>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

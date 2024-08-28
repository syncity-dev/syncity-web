import {
  VStack,
  HStack,
  HstackProps,
  VstackProps,
} from "../../../../styled-system/jsx";
import { Button } from "@/components/core/Button/Button";
import { NAV_ITEMS } from "@/constants/navigation";
import { Size } from "@/types/core";

type NavItem = (typeof NAV_ITEMS)[number];

interface INavItemsProps extends HstackProps, VstackProps {
  orientation?: "vertical" | "horizontal";
  haveIcons?: boolean;
  size?: Size;
}

export const NavItems = ({
  orientation = "horizontal",
  haveIcons = false,
  size = "md",
  ...restProps
}: INavItemsProps) => {
  const Stack = orientation === "vertical" ? VStack : HStack;
  const navItems: NavItem[] | [] = [];

  return (
    <Stack {...restProps}>
      {navItems?.map(({ id, label, path, Icon }) => (
        <Button
          key={id}
          href={path}
          visual={"link"}
          size={size}
          gap={2.5}
          w="fit"
        >
          {haveIcons ? <Icon /> : null}
          {label}
        </Button>
      ))}
    </Stack>
  );
};

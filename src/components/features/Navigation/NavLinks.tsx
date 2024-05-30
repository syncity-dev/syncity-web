import {
  VStack,
  HStack,
  HstackProps,
  VstackProps,
} from "../../../../styled-system/jsx";
import { Button } from "@/components/core/Button/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { Size } from "@/types/core";

interface INavLinksProps extends HstackProps, VstackProps {
  orientation?: "vertical" | "horizontal";
  haveIcons?: boolean;
  size?: Size;
}

export const NavLinks = ({
  orientation = "horizontal",
  haveIcons = false,
  size = "md",
  ...restProps
}: INavLinksProps) => {
  const Stack = orientation === "vertical" ? VStack : HStack;

  return (
    <Stack {...restProps}>
      {NAV_LINKS.map(({ id, label, path, Icon }) => (
        <Button
          key={id}
          href={path}
          visual={
            orientation === "horizontal" && label === "Contact"
              ? "solid"
              : "link"
          }
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

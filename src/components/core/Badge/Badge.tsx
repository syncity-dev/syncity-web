import { Size } from "@/types/core";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { badgeRecipe } from "@/recipes/badgeRecipe";

interface IBadgeProps extends HTMLStyledProps<"span"> {
  status?: "default" | "success" | "warning" | "danger";
  size?: Size;
  visual?: "solid" | "outline";
}

const StyledBadge = styled("span");

export const Badge = ({
  status = "default",
  size = "md",
  visual = "solid",
  ...restProps
}: IBadgeProps) => {
  return (
    <StyledBadge
      className={badgeRecipe({ status, size, visual })}
      {...restProps}
    />
  );
};

import { Size } from "@/types/core";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { badge } from "@/components/core/Badge/Badge.recipe";

interface IBadgeProps extends HTMLStyledProps<"span"> {
  status?: "default" | "success" | "warning" | "danger";
  size?: Size;
  visual?: "solid" | "outline";
}

const BaseBadge = styled("span");

export const Badge = ({
  status = "default",
  size = "md",
  visual = "solid",
  ...restProps
}: IBadgeProps) => {
  return (
    <BaseBadge className={badge({ status, size, visual })} {...restProps} />
  );
};

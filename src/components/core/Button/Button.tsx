import { buttonRecipe } from "@/recipes/buttonRecipe";
import { SystemStyleObject } from "@pandacss/dev";
import { styled } from "../../../../styled-system/jsx";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> & {
  label: string;
  href?: string;
  visual?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  color?: "red" | "yellow" | "gray";
};

export function Button({
  label,
  href,
  visual,
  size,
  color = "red",
  ...restProps
}: ButtonProps) {
  const StyledLink = styled(Link);

  return href ? (
    <StyledLink
      href={href}
      passHref
      className={buttonRecipe({ visual, size, color })}
      {...restProps}
    >
      {label}
    </StyledLink>
  ) : (
    <styled.button
      className={buttonRecipe({ visual, size, color })}
      {...restProps}
    >
      {label}
    </styled.button>
  );
}

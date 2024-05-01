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
  return href ? (
    <Link href={href} passHref {...restProps}>
      <styled.a className={buttonRecipe({ visual, size, color })}>
        {label}
      </styled.a>
    </Link>
  ) : (
    <styled.button
      className={buttonRecipe({ visual, size, color })}
      {...restProps}
    >
      {label}
    </styled.button>
  );
}

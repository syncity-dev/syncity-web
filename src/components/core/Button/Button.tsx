import Link from "next/link";
import { UrlObject } from "url";
import { buttonRecipe } from "@/recipes/buttonRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

type Url = string | UrlObject;

type ButtonBaseProps = {
  visual?: "solid" | "outline" | "link";
  size?: Size;
  color?: "red" | "yellow" | "black";
};

type ButtonProps = ButtonBaseProps & HTMLStyledProps<"button">;
type LinkProps = ButtonBaseProps & HTMLStyledProps<"a"> & { href: Url };

const StyledButton = styled("button");
const StyledLink = styled(Link);

export const Button = (props: ButtonProps | LinkProps) => {
  const { visual, size, color = "black", ...restProps } = props;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = restProps as HTMLStyledProps<"a">;

    return (
      <StyledLink
        href={href as Url}
        className={buttonRecipe({ visual, size, color })}
        passHref
        {...linkProps}
      />
    );
  }

  return (
    <StyledButton
      {...(restProps as HTMLStyledProps<"button">)}
      className={buttonRecipe({ visual, size, color })}
    />
  );
};

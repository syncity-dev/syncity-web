import Link from "next/link";
import { UrlObject } from "url";
import { buttonRecipe } from "@/recipes/buttonRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

type Url = string | UrlObject;

type ButtonBaseProps = {
  label: string;
  visual?: "solid" | "outline";
  size?: Size;
  color?: "red" | "yellow" | "gray";
};

type ButtonProps = ButtonBaseProps & HTMLStyledProps<"button">;
type LinkProps = ButtonBaseProps & HTMLStyledProps<"a"> & { href: Url };

const StyledButton = styled("button");
const StyledLink = styled(Link);

export const Button = (props: ButtonProps | LinkProps) => {
  const { label, visual, size, color = "red", ...restProps } = props;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = restProps as HTMLStyledProps<"a">;

    return (
      <StyledLink
        href={href as Url}
        className={buttonRecipe({ visual, size, color })}
        passHref
        {...linkProps}
      >
        {label}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      {...(restProps as HTMLStyledProps<"button">)}
      className={buttonRecipe({ visual, size, color })}
    >
      {label}
    </StyledButton>
  );
};

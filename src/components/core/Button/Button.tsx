import { buttonRecipe } from "@/recipes/buttonRecipe";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { Size } from "@/types/core";

type ButtonBaseProps = {
  visual?: "solid" | "outline" | "link";
  size?: Size;
  color?: "red" | "yellow" | "black" | "brand";
};

type ButtonProps = ButtonBaseProps & HTMLStyledProps<"button">;
type LinkProps = ButtonBaseProps & HTMLStyledProps<"a"> & { href: string };

const StyledButton = styled("button");
const StyledLink = styled("a");

export const Button = (props: ButtonProps | LinkProps) => {
  const { visual, size, color, ...restProps } = props;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = restProps as HTMLStyledProps<"a">;
    return (
      <StyledLink
        href={href}
        className={buttonRecipe({ visual, size, color })}
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

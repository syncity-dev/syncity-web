import { button } from "@/components/core/Button/Button.recipe";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { Size } from "@/types/core";

export type ButtonColor = "blue" | "red" | "slate" | "green";

type ButtonBaseProps = {
  visual?: "solid" | "outline" | "link";
  size?: Size;
  color?: ButtonColor;
};

type ButtonProps = ButtonBaseProps & HTMLStyledProps<"button">;
type LinkProps = ButtonBaseProps & HTMLStyledProps<"a"> & { href: string };

const BaseButton = styled("button");
const BaseLink = styled("a");

export const Button = (props: ButtonProps | LinkProps) => {
  const { visual, size, color = "blue", ...restProps } = props;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = restProps as HTMLStyledProps<"a">;
    return (
      <BaseLink
        href={href}
        className={button({ visual, size })}
        colorPalette={color}
        {...linkProps}
      />
    );
  }

  return (
    <BaseButton
      {...(restProps as HTMLStyledProps<"button">)}
      className={button({ visual, size })}
      colorPalette={color}
    />
  );
};

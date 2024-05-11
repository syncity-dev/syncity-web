import { Size } from "@/types/core";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { textRecipe } from "@/recipes/textRecipe";

export type TextElement =
  | "p"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TextProps = HTMLStyledProps<TextElement> & {
  as?: TextElement;
  size?: Size;
};

export const Text = ({ as = "p", size = "md", ...restProps }: TextProps) => {
  const StyledText = styled(as);

  return <StyledText className={textRecipe({ size, as })} {...restProps} />;
};

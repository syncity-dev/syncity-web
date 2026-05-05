import { Size } from "@/types/core";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { text } from "@/components/core/Text/Text.recipe";

export type TextElement = "p" | "label" | "small";

type TextProps = HTMLStyledProps<TextElement> & {
  as?: TextElement;
  size?: Size;
};

export const Text = ({ as = "p", size = "md", ...restProps }: TextProps) => {
  const StyledText = styled(as);

  return <StyledText className={text({ size, as })} {...restProps} />;
};

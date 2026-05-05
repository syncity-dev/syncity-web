import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { heading } from "@/components/core/Heading/Heading.recipe";

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = HTMLStyledProps<HeadingElement> & {
  as?: HeadingElement;
};

export const Heading = ({ as = "h2", ...restProps }: HeadingProps) => {
  const StyledHeading = styled(as);

  return <StyledHeading className={heading({ as })} {...restProps} />;
};

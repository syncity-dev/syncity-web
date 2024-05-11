import { ReactNode, HTMLAttributes } from "react";
import { css } from "../../../../../styled-system/css";
import { styled } from "../../../../../styled-system/jsx";
import { HTMLStyledProps } from "../../../../../styled-system/types";

interface ICoreSectionWrapperProps extends HTMLStyledProps<"section"> {
  children: ReactNode;
  title: string;
}

export const CoreSectionWrapper = ({
  children,
  title,
  ...restProps
}: ICoreSectionWrapperProps) => {
  return (
    <styled.section {...restProps}>
      <h3
        className={css({
          fontSize: "2xl",
          fontFamily: "heading",
          fontWeight: "bold",
        })}
      >
        {title}
      </h3>
      {children}
    </styled.section>
  );
};

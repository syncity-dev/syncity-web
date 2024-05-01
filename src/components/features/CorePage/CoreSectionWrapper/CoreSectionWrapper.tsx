import { ReactNode, HTMLAttributes } from "react";
import { css } from "../../../../../styled-system/css";
import { StyledComponent, styled } from "../../../../../styled-system/jsx";
import {
  JsxStyleProps,
  HTMLStyledProps,
} from "../../../../../styled-system/types";

interface ICoreSectionWrapperProps extends HTMLStyledProps<"section"> {
  children: ReactNode;
  title: string;
}

export function CoreSectionWrapper({
  children,
  title,
  ...restProps
}: ICoreSectionWrapperProps) {
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
}

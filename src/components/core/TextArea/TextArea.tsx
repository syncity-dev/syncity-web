import { forwardRef } from "react";
import { textArea } from "@/components/core/TextArea/TextArea.recipe";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { Size } from "@/types/core";

interface ICheckboxProps extends Omit<HTMLStyledProps<"textarea">, "size"> {
  size?: Size;
}

type Ref = HTMLTextAreaElement;

const StyledTextArea = styled.textarea;

export const TextArea = forwardRef<Ref, ICheckboxProps>(
  ({ size, ...restProps }, ref) => {
    const classes = textArea({ size });

    return (
      <StyledTextArea ref={ref} className={classes.control} {...restProps} />
    );
  },
);

TextArea.displayName = "TextArea";

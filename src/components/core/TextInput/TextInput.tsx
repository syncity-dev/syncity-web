import { forwardRef } from "react";
import { textInput } from "@/components/core/TextInput/TextInput.recipe";
import { styled, HTMLStyledProps } from "@/styled-system/jsx";
import { Size } from "@/types/core";

interface ITextInputProps extends Omit<HTMLStyledProps<"input">, "size"> {
  size?: Size;
}

type Ref = HTMLInputElement;

const StyledInput = styled("input");

export const TextInput = forwardRef<Ref, ITextInputProps>(
  ({ size, ...restProps }, ref) => {
    const classes = textInput({ size });

    return <StyledInput ref={ref} className={classes.control} {...restProps} />;
  },
);

TextInput.displayName = "TextInput";

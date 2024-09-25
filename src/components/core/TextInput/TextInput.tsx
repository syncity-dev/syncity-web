import { forwardRef } from "react";
import { textInputRecipe } from "@/recipes/textInputRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

interface ITextInputProps extends Omit<HTMLStyledProps<"input">, "size"> {
  size?: Size;
}

type Ref = HTMLInputElement;

const StyledInput = styled("input");

export const TextInput = forwardRef<Ref, ITextInputProps>(
  ({ size = "sm", ...restProps }, ref) => {
    const classes = textInputRecipe({ size });

    return <StyledInput ref={ref} className={classes.control} {...restProps} />;
  }
);

TextInput.displayName = "TextInput";

import { textInputRecipe } from "@/recipes/textInputRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

interface ITextInputProps extends Omit<HTMLStyledProps<"input">, "size"> {
  label?: string;
  size?: Size;
}

const StyledInput = styled("input");

export const TextInput = ({
  label,
  size = "sm",
  ...restProps
}: ITextInputProps) => {
  const classes = textInputRecipe({ size });

  return <StyledInput className={classes.control} {...restProps} />;
};

import { textAreaRecipe } from "@/recipes/textAreaRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

interface ICheckboxProps extends Omit<HTMLStyledProps<"textarea">, "size"> {
  size?: Size;
}

const StyledTextArea = styled("textarea");

export const TextArea = ({ size = "sm", ...restProps }: ICheckboxProps) => {
  const classes = textAreaRecipe({ size });

  return <StyledTextArea className={classes.control} {...restProps} />;
};

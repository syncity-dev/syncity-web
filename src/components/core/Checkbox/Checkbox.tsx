import { checkboxRecipe } from "@/recipes/checkboxRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";
import { Size } from "@/types/core";

interface ICheckboxProps extends Omit<HTMLStyledProps<"input">, "size"> {
  size?: Size;
}

const StyledInput = styled("input");

export const Checkbox = ({
  size = "sm",
  checked,
  ...restProps
}: ICheckboxProps) => {
  const classes = checkboxRecipe({ size: size, checked });

  return (
    <StyledInput
      type="checkbox"
      className={classes.control}
      checked={checked}
      cursor="pointer"
      {...restProps}
    />
  );
};

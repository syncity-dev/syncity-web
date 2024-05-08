import { checkboxRecipe } from "@/recipes/checkboxRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";

interface ICheckboxProps extends Omit<HTMLStyledProps<"input">, "value"> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

const StyledInput = styled("input");

export const Checkbox = ({
  label,
  controlSize = "sm",
  required,
  checked,
  ...restProps
}: ICheckboxProps) => {
  const classes = checkboxRecipe({ size: controlSize, checked });

  return (
    <label className={classes.root}>
      <StyledInput
        type="checkbox"
        className={classes.control}
        required={required}
        checked={checked}
        {...restProps}
      />
      {label ? (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.required}>*</span>}
        </span>
      ) : null}
    </label>
  );
};

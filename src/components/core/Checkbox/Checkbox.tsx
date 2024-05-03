import { checkboxRecipe } from "@/recipes/checkboxRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";

interface ICheckboxProps extends Omit<HTMLStyledProps<"input">, "value"> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
  value: boolean;
}

const StyledInput = styled("input");

export function Checkbox({
  label,
  controlSize = "sm",
  value,
  ...restProps
}: ICheckboxProps) {
  const classes = checkboxRecipe({ size: controlSize, checked: value });
  return (
    <label className={classes.root}>
      <StyledInput
        type="checkbox"
        className={classes.control}
        value={value ? "on" : "off"}
        {...restProps}
      />
      {label ? <span className={classes.label}>{label}</span> : null}
    </label>
  );
}

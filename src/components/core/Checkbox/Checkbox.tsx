import { checkboxRecipe } from "@/recipes/checkboxRecipe";
import { InputHTMLAttributes } from "react";

interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
  value: boolean;
}

export function Checkbox({
  label,
  controlSize = "sm",
  value,
  ...restProps
}: ICheckboxProps) {
  const classes = checkboxRecipe({ size: controlSize, checked: value });
  return (
    <label className={classes.root}>
      <input
        type="checkbox"
        className={classes.control}
        value={value ? "on" : "off"}
        {...restProps}
      />
      {label ? <span className={classes.label}>{label}</span> : null}
    </label>
  );
}

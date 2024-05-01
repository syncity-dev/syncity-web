import { checkboxRecipe } from "@/recipes/checkboxRecipe";
import { css } from "../../../../styled-system/css";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rootSize?: "sm" | "md";
}

export function Checkbox({ rootSize = "sm", ...restProps }: ICheckboxProps) {
  const classes = checkboxRecipe({ size: rootSize });
  return (
    <label className={classes.root}>
      <input type="checkbox" className={css({ srOnly: true })} {...restProps} />
      <div className={classes.control} />
      <span className={classes.label}>Checkbox Label</span>
    </label>
  );
}

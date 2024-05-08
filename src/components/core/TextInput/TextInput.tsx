"use client";

import { textInputRecipe } from "@/recipes/textInputRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";

interface ITextInputProps extends HTMLStyledProps<"input"> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

const StyledInput = styled("input");

export const TextInput = ({
  label,
  controlSize = "sm",
  required,
  ...restProps
}: ITextInputProps) => {
  const classes = textInputRecipe({ size: controlSize });

  return (
    <label className={classes.root}>
      {label ? (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.required}>*</span>}
        </span>
      ) : null}
      <StyledInput
        className={classes.control}
        required={required}
        {...restProps}
      />
    </label>
  );
};

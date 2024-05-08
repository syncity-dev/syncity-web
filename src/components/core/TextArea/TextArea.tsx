"use client";

import { textAreaRecipe } from "@/recipes/textAreaRecipe";
import { styled, HTMLStyledProps } from "../../../../styled-system/jsx";

interface ICheckboxProps extends HTMLStyledProps<"textarea"> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

const StyledTextArea = styled("textarea");

export const TextArea = ({
  label,
  controlSize = "sm",
  required,
  ...restProps
}: ICheckboxProps) => {
  const classes = textAreaRecipe({ size: controlSize });

  return (
    <label className={classes.root}>
      {label ? (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.required}>*</span>}
        </span>
      ) : null}
      <StyledTextArea
        className={classes.control}
        required={required}
        {...restProps}
      />
    </label>
  );
};

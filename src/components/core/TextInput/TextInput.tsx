"use client";

import { InputHTMLAttributes } from "react";
import { textInputRecipe } from "@/recipes/textInputRecipe";
import { styled } from "../../../../styled-system/jsx";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

const StyledInput = styled("input");

export function TextInput({
  label,
  controlSize = "sm",
  ...restProps
}: ITextInputProps) {
  const classes = textInputRecipe({ size: controlSize });
  return (
    <label className={classes.root}>
      {label ? <span className={classes.label}>{label}</span> : null}
      <StyledInput className={classes.control} {...restProps} />
    </label>
  );
}

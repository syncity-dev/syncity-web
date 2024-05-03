"use client";

import { InputHTMLAttributes } from "react";
import { textAreaRecipe } from "@/recipes/textAreaRecipe";
import { styled } from "../../../../styled-system/jsx";

interface ICheckboxProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

const StyledTextArea = styled("textarea");

export function TextArea({
  label,
  controlSize = "sm",
  ...restProps
}: ICheckboxProps) {
  const classes = textAreaRecipe({ size: controlSize });
  return (
    <label className={classes.root}>
      {label ? <span className={classes.label}>{label}</span> : null}
      <StyledTextArea className={classes.control} {...restProps} />
    </label>
  );
}

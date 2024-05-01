"use client";

import { InputHTMLAttributes, useState } from "react";
import { textInputRecipe } from "@/recipes/textInputRecipe";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  controlSize?: "sm" | "md" | "lg";
}

export function TextInput({
  label,
  controlSize = "sm",
  ...restProps
}: ICheckboxProps) {
  const classes = textInputRecipe({ size: controlSize });
  return (
    <label className={classes.root}>
      {label ? <span className={classes.label}>{label}</span> : null}
      <input className={classes.control} {...restProps} />
    </label>
  );
}

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { LuX } from "react-icons/lu";
import { styled } from "@/styled-system/jsx";
import { toast, toastViewport } from "@/components/core/Toast/Toast.recipe";
import { createStyleContext } from "@/utils/style-context";
import { icon } from "@/recipes/icon";

const { withProvider, withContext } = createStyleContext(toast);

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = styled(ToastPrimitive.Viewport, toastViewport);
export const Toast = withProvider(styled(ToastPrimitive.Root), "root", {
  className: "group",
});

export const ToastAction = withContext(styled(ToastPrimitive.Action), "action");
export const ToastClose = withContext(styled(ToastPrimitive.Close), "close", {
  children: <LuX className={icon({ size: "lg" })} />,
});

export const ToastTitle = withContext(styled(ToastPrimitive.Title), "title");
export const ToastDescription = withContext(
  styled(ToastPrimitive.Description),
  "description",
);

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;

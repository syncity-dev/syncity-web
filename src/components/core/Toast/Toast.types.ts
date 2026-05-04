import { ToastActionElement, ToastProps } from "@/components/core/Toast/Toast";
import { actionTypes } from "@/components/core/Toast/Toast.constants";

export type ToastVariant =
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "info";

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  variant?: ToastVariant;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type ActionType = typeof actionTypes;

export type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: string }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: string };

export type Toast = Omit<ToasterToast, "id">;

export interface State {
  toasts: ToasterToast[];
}

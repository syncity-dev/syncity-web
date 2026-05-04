import { useToastContext } from "@/components/core/Toast/Toast.context";
import { actionTypes } from "@/components/core/Toast/Toast.constants";
import type { ToasterToast } from "@/components/core/Toast/Toast.types";

type Toast = Omit<ToasterToast, "id">;

export function useToast() {
  const { state, dispatch } = useToastContext();

  function toast(props: Toast) {
    const id = crypto.randomUUID();
    const dismiss = () =>
      dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

    dispatch({
      type: actionTypes.ADD_TOAST,
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open: boolean) => {
          if (!open) dismiss();
        },
      },
    });

    return {
      id,
      dismiss,
      update: (props: ToasterToast) =>
        dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...props, id } }),
    };
  }

  return {
    toasts: state.toasts,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

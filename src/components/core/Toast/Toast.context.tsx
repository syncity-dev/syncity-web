import type { Dispatch, ReactNode } from 'react';
import { createContext, useContext, useEffect, useReducer, useRef } from 'react';

import {
  actionTypes,
  TOAST_LIMIT,
  TOAST_REMOVE_DELAY,
} from '@/components/core/Toast/Toast.constants';
import type { Action, State } from '@/components/core/Toast/Toast.types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };
    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined ? { ...t, open: false } : t,
        ),
      };
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) return { ...state, toasts: [] };

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

type ToastContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

const ToastContext = createContext<ToastContextValue | null>(null);

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [state, dispatch] = useReducer(reducer, { toasts: [] });
  const timeouts = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    for (const t of state.toasts) {
      if (t.open === false && !timeouts.current.has(t.id)) {
        const timeout = setTimeout(() => {
          timeouts.current.delete(t.id);
          dispatch({ type: actionTypes.REMOVE_TOAST, toastId: t.id });
        }, TOAST_REMOVE_DELAY);
        timeouts.current.set(t.id, timeout);
      }
    }
  }, [state.toasts]);

  return <ToastContext.Provider value={{ state, dispatch }}>{children}</ToastContext.Provider>;
}

export function useToastContext() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');

  return ctx;
}

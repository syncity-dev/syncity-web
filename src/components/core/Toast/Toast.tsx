import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import type * as React from 'react';

import { toast, toastViewport } from '@/components/core/Toast/Toast.recipe';
import { styled } from '@/styled-system/jsx';
import { icon } from '@/styled-system/recipes';
import { createStyleContext } from '@/utils/style-context';

const { withProvider, withContext } = createStyleContext(toast);

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = styled(ToastPrimitive.Viewport, toastViewport);
export const Toast = withProvider(styled(ToastPrimitive.Root), 'root', {
  className: 'group',
});

export const ToastAction = withContext(styled(ToastPrimitive.Action), 'action');
export const ToastClose = withContext(styled(ToastPrimitive.Close), 'close', {
  children: <X className={icon({ size: 'lg' })} />,
});

export const ToastTitle = withContext(styled(ToastPrimitive.Title), 'title');
export const ToastDescription = withContext(styled(ToastPrimitive.Description), 'description');

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;

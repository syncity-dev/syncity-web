import { Portal } from '@ark-ui/react/portal';
import { createToaster, Toast, Toaster as ArkToaster, useToastContext } from '@ark-ui/react/toast';
import { CheckCircleIcon, CircleAlertIcon, CircleXIcon, InfoIcon } from 'lucide-react';
import { type ElementType, forwardRef } from 'react';

import { CloseButton } from '@/components/core/CloseButton/CloseButton';
import { Icon, type IconProps } from '@/components/core/Icon/Icon';
import { Spinner } from '@/components/core/Spinner/Spinner';
import { TOAST_DURATION, TOAST_MAX } from '@/components/core/Toast/Toast.constants';
import { createStyleContext, Stack, styled } from '@/styled-system/jsx';
import { toast } from '@/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(toast);

const Root = withProvider(Toast.Root, 'root');
const Title = withContext(Toast.Title, 'title');
const Description = withContext(Toast.Description, 'description');
const ActionTrigger = withContext(Toast.ActionTrigger, 'actionTrigger');
const CloseTrigger = withContext(Toast.CloseTrigger, 'closeTrigger');
const GroupToaster = withProvider(styled(ArkToaster), 'group');

const colorPaletteMap: Record<string, string> = {
  success: 'success',
  error: 'danger',
  warning: 'warning',
  info: 'info',
};

const iconMap: Record<string, ElementType> = {
  success: CheckCircleIcon,
  error: CircleXIcon,
  warning: CircleAlertIcon,
  info: InfoIcon,
};

const Indicator = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const toast = useToastContext();

  const StatusIcon = iconMap[toast.type];
  if (!StatusIcon) return null;

  return (
    <Icon ref={ref} {...props}>
      <StatusIcon />
    </Icon>
  );
});

export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
  overlap: true,
  max: TOAST_MAX,
  duration: TOAST_DURATION,
});

export const Toaster = () => {
  return (
    <Portal>
      <GroupToaster toaster={toaster} insetInline={{ mdDown: '4' }}>
        {(toast) => (
          <Root>
            {toast.type === 'loading' ? <Spinner color="colorPalette.plain.fg" /> : <Indicator />}

            <Stack gap="3" alignItems="start">
              <Stack gap="1">
                {toast.title && <Title>{toast.title}</Title>}
                {toast.description && <Description>{toast.description}</Description>}
              </Stack>
              {toast.action && <ActionTrigger>{toast.action.label}</ActionTrigger>}
            </Stack>
            {toast.closable && (
              <CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  colorPalette={toast.type ? (colorPaletteMap[toast.type] ?? 'gray') : 'gray'}
                />
              </CloseTrigger>
            )}
          </Root>
        )}
      </GroupToaster>
    </Portal>
  );
};

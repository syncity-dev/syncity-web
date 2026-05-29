import { XIcon } from 'lucide-react';
import { forwardRef } from 'react';

import { IconButton, type IconButtonProps } from '@/components/core/IconButton/IconButton';

export type CloseButtonProps = IconButtonProps;

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(
  { colorPalette = 'gray', ...props },
  ref,
) {
  return (
    <IconButton variant="plain" colorPalette={colorPalette} aria-label="Close" ref={ref} {...props}>
      {props.children ?? <XIcon />}
    </IconButton>
  );
});

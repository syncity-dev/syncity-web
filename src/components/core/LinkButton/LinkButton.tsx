import { ark } from '@ark-ui/react/factory';
import { type ComponentProps, forwardRef } from 'react';

import { styled } from '@/styled-system/jsx';
import { button } from '@/styled-system/recipes';

const BaseLinkButton = styled(ark.a, button);

export type LinkButtonProps = ComponentProps<typeof BaseLinkButton>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(function LinkButton(
  { colorPalette = 'gray', ...props },
  ref,
) {
  return <BaseLinkButton colorPalette={colorPalette} ref={ref} {...props} />;
});

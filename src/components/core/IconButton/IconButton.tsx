import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import type { Size } from '@/types/core';

import { iconButton } from './IconButton.recipe';

type IconButtonBaseProps = {
  size?: Size;
  'aria-label': string;
};

type IconButtonProps = IconButtonBaseProps & HTMLStyledProps<'button'>;

const StyledButton = styled('button');

export const IconButton = ({ size = 'md', ...props }: IconButtonProps) => (
  <StyledButton type="button" className={iconButton({ size })} {...props} />
);

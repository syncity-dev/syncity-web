import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

import { iconButton } from './IconButton.recipe';

type IconButtonSize = 'sm' | 'md' | 'lg' | 'xl';

type IconButtonBaseProps = {
  size?: IconButtonSize;
  'aria-label': string;
};

type IconButtonProps = IconButtonBaseProps & HTMLStyledProps<'button'>;

const StyledButton = styled('button');

export const IconButton = ({ size = 'md', ...props }: IconButtonProps) => (
  <StyledButton type="button" className={iconButton({ size })} {...props} />
);

import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

import { diamond } from './Diamond.recipe';

type DiamondVariant = 'solid' | 'outline';

type DiamondProps = HTMLStyledProps<'span'> & {
  variant?: DiamondVariant;
};

const StyledSpan = styled('span');

export const Diamond = ({ variant, ...props }: DiamondProps) => (
  <StyledSpan aria-hidden="true" className={diamond({ variant })} {...props} />
);

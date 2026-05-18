import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

type EyebrowProps = HTMLStyledProps<'span'>;

const StyledSpan = styled('span');

export const Eyebrow = (props: EyebrowProps) => (
  <StyledSpan textStyle="eyebrow" color="fg.muted" display="inline-block" {...props} />
);

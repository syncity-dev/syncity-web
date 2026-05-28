import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

export type LabelProps = HTMLStyledProps<'label'>;

const StyledLabel = styled('label');

export const Label = (props: LabelProps) => (
  <StyledLabel textStyle="eyebrow" color="fg.muted" display="inline-block" {...props} />
);

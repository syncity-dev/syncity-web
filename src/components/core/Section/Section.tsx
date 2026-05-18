import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

import { section } from './Section.recipe';

type SectionProps = HTMLStyledProps<'section'> & {
  divided?: boolean;
};

const StyledSection = styled('section');

export const Section = ({ divided, ...props }: SectionProps) => (
  <StyledSection className={section({ divided })} {...props} />
);

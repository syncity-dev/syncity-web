import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

type DisplayItalicProps = HTMLStyledProps<'em'>;

const StyledEm = styled('em');

export const DisplayItalic = (props: DisplayItalicProps) => (
  <StyledEm
    fontFamily="heading"
    fontStyle="italic"
    fontWeight="bold"
    color="accent.default"
    {...props}
  />
);

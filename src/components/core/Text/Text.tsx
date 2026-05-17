/* eslint-disable react-hooks/static-components */
import { text } from '@/components/core/Text/Text.recipe';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import type { Size } from '@/types/core';

export type TextElement = 'p' | 'label' | 'small';

type TextProps = HTMLStyledProps<TextElement> & {
  as?: TextElement;
  size?: Size;
};

export const Text = ({ as = 'p', size = 'md', ...restProps }: TextProps) => {
  const StyledText = styled(as);

  return <StyledText className={text({ size, as })} {...restProps} />;
};

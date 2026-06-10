import { forwardRef } from 'react';

import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { textArea } from '@/styled-system/recipes';
import type { Size } from '@/types/core';

type TextAreaProps = Omit<HTMLStyledProps<'textarea'>, 'size'> & {
  size?: Size;
};

type Ref = HTMLTextAreaElement;

const StyledTextArea = styled.textarea;

export const TextArea = forwardRef<Ref, TextAreaProps>(({ size, ...restProps }, ref) => {
  const classes = textArea({ size });

  return <StyledTextArea ref={ref} className={classes.control} {...restProps} />;
});

TextArea.displayName = 'TextArea';

import { forwardRef } from 'react';

import { textArea } from '@/components/core/TextArea/TextArea.recipe';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import type { Size } from '@/types/core';

interface ICheckboxProps extends Omit<HTMLStyledProps<'textarea'>, 'size'> {
  size?: Size;
}

type Ref = HTMLTextAreaElement;

const StyledTextArea = styled.textarea;

export const TextArea = forwardRef<Ref, ICheckboxProps>(({ size, ...restProps }, ref) => {
  const classes = textArea({ size });

  return <StyledTextArea ref={ref} className={classes.control} {...restProps} />;
});

TextArea.displayName = 'TextArea';

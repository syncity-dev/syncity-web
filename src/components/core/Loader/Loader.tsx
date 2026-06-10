import { forwardRef } from 'react';

import { AbsoluteCenter } from '@/components/core/AbsoluteCenter/AbsoluteCenter';
import { Spinner } from '@/components/core/Spinner/Spinner';
import { type HTMLStyledProps, styled } from '@/styled-system/jsx';

export interface LoaderProps extends HTMLStyledProps<'span'> {
  /**
   * Whether the loader is visible
   * @default true
   */
  visible?: boolean | undefined;
  /**
   * The spinner to display when loading
   */
  spinner?: React.ReactNode | undefined;
  /**
   * The placement of the spinner
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end' | undefined;
  /**
   * The text to display when loading
   */
  text?: React.ReactNode | undefined;

  children?: React.ReactNode;
}

const Span = styled('span');

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(function Loader(props, ref) {
  const { spinner, spinnerPlacement = 'start', children, text, visible = true, ...rest } = props;

  if (!visible) return children;

  const resolvedSpinner = spinner ?? (
    <Spinner size="inherit" borderWidth="0.125em" color="inherit" />
  );

  if (text) {
    return (
      <Span ref={ref} display="contents" {...rest}>
        {spinnerPlacement === 'start' && resolvedSpinner}
        {text}
        {spinnerPlacement === 'end' && resolvedSpinner}
      </Span>
    );
  }

  return (
    <Span ref={ref} display="contents" {...rest}>
      <AbsoluteCenter display="inline-flex">{resolvedSpinner}</AbsoluteCenter>
      <Span visibility="hidden" display="contents">
        {children}
      </Span>
    </Span>
  );
});

import {
  createContext,
  type ElementType,
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithoutRef,
  type RefAttributes,
  useContext,
  useMemo,
} from 'react';

import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';

type Props = Record<string, unknown>;
type Recipe = {
  (props?: Props): Props;
  splitVariantProps: (props: Props) => [Props, Props];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, string> | null>(null);

  const withRootProvider = <P extends object>(Component: ElementType) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const slotStyles = useMemo(
        () => recipe(variantProps) as Record<Slot<R>, string>,
        [variantProps],
      );

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      );
    };

    return StyledComponent;
  };

  const withProvider = <
    T extends ElementType,
    P extends {
      className?: string | undefined;
      children?: React.ReactNode;
    } & HTMLStyledProps<T>,
  >(
    Component: ElementType,
    slot: Slot<R>,
    defaultProps?: Partial<T> & { className?: string },
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
    const StyledComponent = styled(Component);

    const StyledSlotProvider = forwardRef<T, P>((props, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props);
      const { className = '', ...restProps } = otherProps;
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>;
      const slotClassName = slotStyles?.[slot];
      const classNames = [
        defaultProps?.className ?? null,
        slotClassName ?? null,
        className ?? null,
      ].filter(Boolean);

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent
            ref={ref}
            {...defaultProps}
            className={classNames.join(' ')}
            {...restProps}
          />
        </StyleContext.Provider>
      );
    });

    // @ts-expect-error — displayName is not typed on ElementType
    StyledSlotProvider.displayName = Component.displayName || Component.name;

    return StyledSlotProvider;
  };

  const withContext = <T, P extends { className?: string | undefined }>(
    Component: ElementType,
    slot: Slot<R>,
    defaultProps?: Partial<T> & {
      className?: string;
      children?: React.ReactNode;
    },
  ) => {
    if (!slot) return Component;

    const StyledComponent = styled(Component);

    const StyledSlotComponent = forwardRef<T, P>(({ className, ...restProps }, ref) => {
      const slotStyles = useContext(StyleContext);
      const slotClassName = slotStyles?.[slot];
      const classNames = [
        defaultProps?.className ?? null,
        slotClassName ?? null,
        className ?? null,
      ].filter(Boolean);

      return (
        <StyledComponent
          ref={ref}
          {...defaultProps}
          className={classNames.join(' ')}
          {...restProps}
        />
      );
    });
    // @ts-expect-error — displayName is not typed on ElementType
    StyledSlotComponent.displayName = Component.displayName || Component.name;

    return StyledSlotComponent;
  };

  return {
    withRootProvider,
    withProvider,
    withContext,
  };
};

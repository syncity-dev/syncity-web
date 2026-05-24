import type { ComponentProps, ComponentPropsWithoutRef, ComponentRef } from 'react';
import { forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cx } from '@/styled-system/css';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { styled } from '@/styled-system/jsx';
import { drawer } from '@/styled-system/recipes';

export type DrawerProps = HTMLStyledProps<'div'> & ComponentProps<typeof DrawerPrimitive.Root>;

const classes = drawer();

const StyledDrawerPrimitiveRootWrapper = styled('div');
const StyledDrawerOverlay = styled(DrawerPrimitive.Overlay);
const StyledDrawerContent = styled(DrawerPrimitive.Content);
const DrawerTrigger = styled(DrawerPrimitive.Trigger);
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = styled(DrawerPrimitive.Close);
const StyledDrawerTitle = styled(DrawerPrimitive.Title);
const StyledDrawerDescription = styled(DrawerPrimitive.Description);

const Drawer = ({
  direction,
  shouldScaleBackground = true,
  children,
  ...restProps
}: DrawerProps) => (
  <StyledDrawerPrimitiveRootWrapper {...restProps}>
    <DrawerPrimitive.Root direction={direction} shouldScaleBackground={shouldScaleBackground}>
      {children}
    </DrawerPrimitive.Root>
  </StyledDrawerPrimitiveRootWrapper>
);
Drawer.displayName = 'Drawer';

const DrawerOverlay = forwardRef<
  ComponentRef<typeof StyledDrawerOverlay>,
  ComponentPropsWithoutRef<typeof StyledDrawerOverlay>
>(({ className, ...props }, ref) => (
  <StyledDrawerOverlay ref={ref} className={cx(classes.overlay, className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = forwardRef<
  ComponentRef<typeof StyledDrawerContent>,
  ComponentPropsWithoutRef<typeof StyledDrawerContent>
>(({ className, children, ...restProps }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <StyledDrawerContent ref={ref} className={cx(classes.content, className)} {...restProps}>
      <div className={classes.contentInner} />
      {children}
    </StyledDrawerContent>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({ className, ...restProps }: HTMLStyledProps<'div'>) => (
  <styled.div className={cx(classes.header, className)} {...restProps} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...restProps }: HTMLStyledProps<'div'>) => (
  <styled.div className={cx(classes.footer, className)} {...restProps} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = forwardRef<
  ComponentRef<typeof StyledDrawerTitle>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...restProps }, ref) => (
  <StyledDrawerTitle ref={ref} className={cx(classes.title, className)} {...restProps} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = forwardRef<
  ComponentRef<typeof StyledDrawerDescription>,
  ComponentPropsWithoutRef<typeof StyledDrawerDescription>
>(({ className, ...props }, ref) => (
  <StyledDrawerDescription ref={ref} className={cx(classes.description, className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};

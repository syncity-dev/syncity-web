"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { HTMLStyledProps, styled } from "../../../../styled-system/jsx";
import { drawerRecipe } from "@/recipes/drawerRecipe";

export type DrawerProps = HTMLStyledProps<"div"> &
  React.ComponentProps<typeof DrawerPrimitive.Root>;

const classes = drawerRecipe();

const StyledDrawerPrimitiveRootWrapper = styled("div");
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
    <DrawerPrimitive.Root
      direction={direction}
      shouldScaleBackground={shouldScaleBackground}
    >
      {children}
    </DrawerPrimitive.Root>
  </StyledDrawerPrimitiveRootWrapper>
);
Drawer.displayName = "Drawer";

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof StyledDrawerOverlay>,
  React.ComponentPropsWithoutRef<typeof StyledDrawerOverlay>
>(({ className, ...props }, ref) => (
  <StyledDrawerOverlay ref={ref} className={classes.overlay} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof StyledDrawerContent>,
  React.ComponentPropsWithoutRef<typeof StyledDrawerContent>
>(({ className, children, ...restProps }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <StyledDrawerContent ref={ref} className={classes.content} {...restProps}>
      <div className={classes.contentInner} />
      {children}
    </StyledDrawerContent>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...restProps }: HTMLStyledProps<"div">) => (
  <styled.div className={classes.header} {...restProps} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...restProps }: HTMLStyledProps<"div">) => (
  <styled.div className={classes.footer} {...restProps} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof StyledDrawerTitle>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...restProps }, ref) => (
  <StyledDrawerTitle ref={ref} className={classes.title} {...restProps} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof StyledDrawerDescription>,
  React.ComponentPropsWithoutRef<typeof StyledDrawerDescription>
>(({ className, ...props }, ref) => (
  <StyledDrawerDescription
    ref={ref}
    className={classes.description}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

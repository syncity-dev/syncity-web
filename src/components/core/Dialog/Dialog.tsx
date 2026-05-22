import { Dialog as ArkDialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import * as React from 'react';

import { dialog } from '@/components/core/Dialog/Dialog.recipe';

export type DialogRootProps = React.ComponentProps<typeof ArkDialog.Root> & {
  placement?: NonNullable<Parameters<typeof dialog>[0]>['placement'];
};

type ClassesContextValue = ReturnType<typeof dialog>;
const ClassesContext = React.createContext<ClassesContextValue>(dialog());

export const DialogRoot = ({ placement = 'right', children, ...props }: DialogRootProps) => {
  const classes = dialog({ placement });

  return (
    <ClassesContext.Provider value={classes}>
      <ArkDialog.Root {...props}>{children}</ArkDialog.Root>
    </ClassesContext.Provider>
  );
};
DialogRoot.displayName = 'DialogRoot';

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkDialog.Backdrop>
>((props, ref) => {
  const classes = React.useContext(ClassesContext);

  return <ArkDialog.Backdrop ref={ref} className={classes.backdrop} {...props} />;
});
DialogBackdrop.displayName = 'DialogBackdrop';

export const DialogPositioner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkDialog.Positioner>
>((props, ref) => {
  const classes = React.useContext(ClassesContext);

  return <ArkDialog.Positioner ref={ref} className={classes.positioner} {...props} />;
});
DialogPositioner.displayName = 'DialogPositioner';

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArkDialog.Content>
>((props, ref) => {
  const classes = React.useContext(ClassesContext);

  return <ArkDialog.Content ref={ref} className={classes.content} {...props} />;
});
DialogContent.displayName = 'DialogContent';

export const DialogHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const classes = React.useContext(ClassesContext);

  return <div className={classes.header} {...props} />;
};
DialogHeader.displayName = 'DialogHeader';

export const DialogBody = (props: React.HTMLAttributes<HTMLElement>) => {
  const classes = React.useContext(ClassesContext);

  return <nav className={classes.body} {...props} />;
};
DialogBody.displayName = 'DialogBody';

export const DialogFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const classes = React.useContext(ClassesContext);

  return <div className={classes.footer} {...props} />;
};
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof ArkDialog.Title>
>((props, ref) => {
  const classes = React.useContext(ClassesContext);

  return <ArkDialog.Title ref={ref} className={classes.title} {...props} />;
});
DialogTitle.displayName = 'DialogTitle';

export const DialogCloseTrigger = ArkDialog.CloseTrigger;

export const DialogPortal = Portal;

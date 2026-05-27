import { ArrowRight, X } from 'lucide-react';
import { useRef } from 'react';

import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
} from '@/components/core/Dialog/Dialog';
import { Icon } from '@/components/core/Icon/Icon';
import { IconButton } from '@/components/core/IconButton/IconButton';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Logo } from '@/components/core/Logo/Logo';
import { NavLinks } from '@/components/shared/MobileDrawerMenu/components/NavLinks';

type MobileDrawerMenuProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MobileDrawerMenu = ({ isOpen, onOpenChange }: MobileDrawerMenuProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={({ open }) => onOpenChange(open)}
      placement="right"
      modal
      lazyMount
      unmountOnExit
      initialFocusEl={() => closeButtonRef.current}
    >
      <DialogPortal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent id="mobile-menu">
            <DialogTitle>Site menu</DialogTitle>

            <DialogHeader>
              <Logo onClick={() => onOpenChange(false)} />
              <DialogCloseTrigger ref={closeButtonRef} asChild>
                <IconButton aria-label="Close menu" size="lg">
                  <X />
                </IconButton>
              </DialogCloseTrigger>
            </DialogHeader>

            <DialogBody aria-label="Mobile navigation">
              <NavLinks onNavLinkClick={() => onOpenChange(false)} />
            </DialogBody>

            <DialogFooter>
              <LinkButton
                variant="solid"
                size="lg"
                href="#contact"
                w="full"
                onClick={() => onOpenChange(false)}
              >
                Start a project{' '}
                <Icon asChild>
                  <ArrowRight />
                </Icon>
              </LinkButton>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </DialogPortal>
    </DialogRoot>
  );
};

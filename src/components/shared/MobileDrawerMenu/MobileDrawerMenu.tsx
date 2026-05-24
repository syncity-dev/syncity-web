import { X } from 'lucide-react';
import { useRef } from 'react';

import { Button } from '@/components/core/Button/Button';
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
import { IconButton } from '@/components/core/IconButton/IconButton';
import { Logo } from '@/components/core/Logo/Logo';
import { NAV_LINKS } from '@/constants/navigation';
import { css } from '@/styled-system/css';
import { interactiveTransition } from '@/theme/motion/transitions';

type MobileDrawerMenuProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const navLinkClass = css({
  display: 'flex',
  alignItems: 'center',
  px: '4',
  py: '5',
  textStyle: '2xl',
  fontFamily: 'heading',
  fontWeight: 'semibold',
  letterSpacing: '-0.005em',
  color: 'fg.default',
  textDecoration: 'none',
  rounded: 'l3',
  ...interactiveTransition,
  _hover: { bg: 'bg.subtle' },
  _focusVisible: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'accent.default',
    outlineOffset: '2px',
  },
});

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
              <Logo />
              <DialogCloseTrigger ref={closeButtonRef} asChild>
                <IconButton aria-label="Close menu" size="lg">
                  <X size={18} />
                </IconButton>
              </DialogCloseTrigger>
            </DialogHeader>

            <DialogBody aria-label="Mobile navigation">
              {NAV_LINKS.map(({ id, href, label }) => (
                <a
                  key={id}
                  href={href}
                  onClick={() => onOpenChange(false)}
                  className={navLinkClass}
                >
                  {label}
                </a>
              ))}
            </DialogBody>

            <DialogFooter>
              <Button
                visual="solid"
                size="lg"
                href="#contact"
                w="full"
                onClick={() => onOpenChange(false)}
              >
                Start a project →
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </DialogPortal>
    </DialogRoot>
  );
};

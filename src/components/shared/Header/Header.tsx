import { ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';

import { Icon } from '@/components/core/Icon/Icon';
import { IconButton } from '@/components/core/IconButton/IconButton';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Logo } from '@/components/core/Logo/Logo';
import { HeaderWrapper } from '@/components/features/Header/HeaderWrapper';
import { ColorModeSwitcher } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher';
import { MobileDrawerMenu } from '@/components/shared/MobileDrawerMenu/MobileDrawerMenu';
import { NAV_LINKS } from '@/constants/navigation';
import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { interactiveTransition } from '@/theme/motion/transitions';

const navLinkClass = css({
  fontFamily: 'body',
  fontWeight: 'medium',
  textStyle: 'sm',
  color: 'fg.muted',
  textDecoration: 'none',
  py: '2',
  px: '3.5',
  rounded: 'l4',
  ...interactiveTransition,
  _hover: { bg: 'bg.muted', color: 'fg.default' },
  _focusVisible: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'accent.default',
    outlineOffset: '2px',
  },
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className={css({
          position: 'absolute',
          top: '-100%',
          left: '4',
          px: '4',
          py: '2',
          bg: 'accent.default',
          color: 'accent.fg',
          rounded: 'l2',
          textStyle: 'sm',
          fontWeight: 'bold',
          zIndex: 'modal',
          _focusVisible: {
            top: '4',
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineColor: 'accent.fg',
            outlineOffset: '2px',
          },
        })}
      >
        Skip to main content
      </a>

      <HeaderWrapper>
        <Logo size="md" />

        <nav
          aria-label="Main navigation"
          className={css({
            display: { base: 'none', sm: 'flex' },
            gap: '1',
            alignItems: 'center',
          })}
        >
          {NAV_LINKS.map(({ id, label, href }) => (
            <a key={id} href={href} className={navLinkClass}>
              {label}
            </a>
          ))}
        </nav>

        <HStack gap="2">
          <ColorModeSwitcher />
          <LinkButton
            href="#contact"
            variant="solid"
            size="lg"
            display={{ base: 'none', sm: 'inline-flex' }}
          >
            Start a project{' '}
            <Icon asChild>
              <ArrowRight />
            </Icon>
          </LinkButton>
          <IconButton
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            size="lg"
            display={{ base: 'inline-flex', sm: 'none' }}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={18} />
          </IconButton>
        </HStack>
      </HeaderWrapper>
      <MobileDrawerMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </>
  );
};

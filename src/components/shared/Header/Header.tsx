import { ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';

import { Icon } from '@/components/core/Icon/Icon';
import { IconButton } from '@/components/core/IconButton/IconButton';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Logo } from '@/components/core/Logo/Logo';
import { HeaderWrapper } from '@/components/features/Header/HeaderWrapper';
import { ColorModeSwitcher } from '@/components/shared/ColorModeSwitcher/ColorModeSwitcher';
import { NavLinks } from '@/components/shared/Header/components/NavLinks';
import { MobileDrawerMenu } from '@/components/shared/MobileDrawerMenu/MobileDrawerMenu';
import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';

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

        <NavLinks />

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
            <Icon asChild>
              <Menu />
            </Icon>
          </IconButton>
        </HStack>
      </HeaderWrapper>
      <MobileDrawerMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </>
  );
};

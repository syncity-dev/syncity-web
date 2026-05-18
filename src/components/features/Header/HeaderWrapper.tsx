import type { ReactNode } from 'react';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const StickyHeader = styled('header');

export const HeaderWrapper = ({ children }: { children: ReactNode }) => (
  <StickyHeader
    position="sticky"
    top="3"
    mt="3"
    mx="auto"
    px={{ base: '5', md: '7' }}
    maxW="6xl"
    zIndex="header"
  >
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bg: 'bg.default/80',
        backdropFilter: 'blur(14px) saturate(120%)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.default',
        rounded: 'l4',
        shadow: 'sm',
        py: '2',
        pl: '5',
        pr: '2',
      })}
    >
      {children}
    </div>
  </StickyHeader>
);

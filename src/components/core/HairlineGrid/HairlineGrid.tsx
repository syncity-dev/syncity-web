import type { ElementType } from 'react';

import { css } from '@/styled-system/css';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { Box, Grid } from '@/styled-system/jsx';

type HairlineGridProps = HTMLStyledProps<'div'> & {
  as?: ElementType;
  innerAs?: ElementType;
};

export const HairlineGrid = ({
  gridTemplateColumns,
  children,
  as,
  innerAs,
  ...props
}: HairlineGridProps) => {
  if (gridTemplateColumns !== undefined) {
    return (
      <Box
        as={as}
        position="relative"
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderTopColor="border.default"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border.default"
        overflow="hidden"
        {...props}
      >
        <Grid as={innerAs} gridTemplateColumns={gridTemplateColumns} gap="1px" bg="border.default">
          {children}
        </Grid>
      </Box>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={css({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 'calc(50% - 50vw)',
        width: '100vw',
        backgroundImage: [
          'linear-gradient(var(--colors-border-default) 1px, transparent 1px)',
          'linear-gradient(90deg, var(--colors-border-default) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, #000 30%, transparent 80%)',
        pointerEvents: 'none',
        opacity: 0.7,
        _motionReduce: { opacity: 0 },
      })}
    />
  );
};

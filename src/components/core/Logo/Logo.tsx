import { Image } from '@unpic/react';

import type { RouteLinkProps } from '@/components/core/RouteLink/RouteLink';
import { RouteLink } from '@/components/core/RouteLink/RouteLink';
import { css } from '@/styled-system/css';
import { logo } from '@/styled-system/recipes';
import type { Size } from '@/types/core';

const lightVariant = css({ _dark: { display: 'none' } });
const darkVariant = css({ display: 'none', _dark: { display: 'block' } });

type LogoProps = Omit<RouteLinkProps, 'to'> & {
  size?: Size;
};

export const Logo = ({ size = 'md', ...restProps }: LogoProps) => {
  return (
    <RouteLink to="/" className={logo({ size })} aria-label="Syncity home" {...restProps}>
      <Image
        src="/logos/logo-primary.svg"
        layout="fullWidth"
        alt="Syncity"
        className={lightVariant}
      />
      <Image
        src="/logos/logo-primary.svg"
        layout="fullWidth"
        alt="Syncity"
        className={darkVariant}
      />
    </RouteLink>
  );
};

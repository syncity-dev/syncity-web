import { Image } from '@unpic/react';

import { darkVariant, lightVariant, logo } from '@/components/core/Logo/Logo.recipe';
import type { RouteLinkProps } from '@/components/core/RouteLink/RouteLink';
import { RouteLink } from '@/components/core/RouteLink/RouteLink';
import type { Size } from '@/types/core';

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

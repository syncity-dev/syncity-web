import {
  RouteLink,
  RouteLinkProps,
} from "@/components/core/RouteLink/RouteLink";
import {
  logo,
  lightVariant,
  darkVariant,
} from "@/components/core/Logo/Logo.recipe";

import { Size } from "@/types/core";
import { Image } from "@unpic/react";

type LogoProps = Omit<RouteLinkProps, "to"> & {
  size?: Size;
};

export const Logo = ({ size = "md", ...restProps }: LogoProps) => {
  return (
    <RouteLink to="/" className={logo({ size })} {...restProps}>
      <Image
        src="/logos/logo-light.png"
        layout="fullWidth"
        alt="Syncity Logo"
        className={lightVariant}
      />
      <Image
        src="/logos/logo-dark.png"
        layout="fullWidth"
        alt="Syncity Logo"
        className={darkVariant}
      />
    </RouteLink>
  );
};

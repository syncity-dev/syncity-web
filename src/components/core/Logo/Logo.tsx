import { RouteLink } from "@/components/core/RouteLink/RouteLink";
import { logo } from "@/components/core/Logo/Logo.recipe";
import { Size } from "@/types/core";
import { Image } from "@unpic/react";

type LogoProps = {
  size?: Size;
};

export const Logo = ({ size = "md" }: LogoProps) => {
  return (
    <RouteLink to="/" className={logo({ size })}>
      <Image src="/Logo.png" layout="fullWidth" alt="Syncity Logo" />
    </RouteLink>
  );
};

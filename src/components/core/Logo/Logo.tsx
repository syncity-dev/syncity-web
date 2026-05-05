import { RouteLink } from "@/components/core/RouteLink/RouteLink";
import { logo } from "@/components/core/Logo/Logo.recipe";
import { Size } from "@/types/core";

type LogoProps = {
  size?: Size;
};

export const Logo = ({ size = "md" }: LogoProps) => {
  return (
    <RouteLink to="/" className={logo({ size })}>
      <img src="/Logo.png" width="100%" height="100%" alt="Syncity Logo" />
    </RouteLink>
  );
};

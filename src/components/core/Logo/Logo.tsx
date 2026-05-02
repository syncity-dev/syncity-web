import { RouteLink } from "@/components/core/RouteLink/RouteLink";

export const Logo = ({ width = 65, height = 65 }) => {
  return (
    <RouteLink to="/" rounded="full" outlineColor="brand.600">
      <img src="/Logo.png" width={width} height={height} alt="Syncity Logo" />
    </RouteLink>
  );
};

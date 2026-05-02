import { Link } from "@tanstack/react-router";
import { styled } from "@/styled-system/jsx";

const StyledLink = styled(Link);

export const Logo = ({ width = 65, height = 65 }) => {
  return (
    <StyledLink to="/" rounded="full" outlineColor="brand.600">
      <img src="/Logo.png" width={width} height={height} alt="Syncity Logo" />
    </StyledLink>
  );
};

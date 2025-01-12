import { styled } from "../../../../styled-system/jsx";
import Link from "next/link";
import Image from "next/image";

const StyledLink = styled(Link);

export const Logo = ({ width = 65, height = 65 }) => {
  return (
    <StyledLink href="/" rounded="full" outlineColor="brand.600">
      <Image src="/Logo.png" width={width} height={height} alt="Syncity Logo" />
    </StyledLink>
  );
};

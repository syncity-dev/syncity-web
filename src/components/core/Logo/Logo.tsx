import { styled } from "../../../../styled-system/jsx";
import Link from "next/link";
import Image from "next/image";

const StyledLink = styled(Link);

export const Logo = () => {
  return (
    <StyledLink href="/" rounded="full" outlineColor="brand.600">
      <Image src="/Logo, v5.png" width={65} height={65} alt="Synced Logo" />
    </StyledLink>
  );
};

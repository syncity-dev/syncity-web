import { MobileDrawerMenu } from "./MobileDrawerMenu";
import { Logo } from "../core/Logo/Logo";
import { NavItems } from "../features/Navigation/NavItems";
import { HeaderWrapper } from "../features/Header/HeaderWrapper";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavItems gap={10} display={{ base: "none", md: "flex" }} />
      <MobileDrawerMenu />
    </HeaderWrapper>
  );
};

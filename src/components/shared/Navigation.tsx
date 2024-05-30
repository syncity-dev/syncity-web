import { MobileDrawerMenu } from "./MobileDrawerMenu";
import { Logo } from "../core/Logo/Logo";
import { NavLinks } from "../features/Navigation/NavLinks";
import { NavWrapper } from "../features/Navigation/NavWrapper";

export const Navigation = () => {
  return (
    <NavWrapper>
      <Logo />
      <NavLinks gap={10} display={{ base: "none", md: "flex" }} />
      <MobileDrawerMenu />
    </NavWrapper>
  );
};

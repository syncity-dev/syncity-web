import { MobileDrawerMenu } from "./MobileDrawerMenu";
import { Logo } from "../core/Logo/Logo";
import { NavItems } from "../features/Navigation/NavItems";
import { NavWrapper } from "../features/Navigation/NavWrapper";

export const Navigation = () => {
  return (
    <NavWrapper>
      <Logo />
      <NavItems gap={10} display={{ base: "none", md: "flex" }} />
      <MobileDrawerMenu />
    </NavWrapper>
  );
};

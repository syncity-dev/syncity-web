import { cardRecipe } from "@/recipes/cardRecipe";
import { HTMLStyledProps, styled } from "../../../../styled-system/jsx";
import { ReactNode } from "react";

interface ICardProps extends HTMLStyledProps<"div"> {
  as?: "div" | "section" | "article";
  children: ReactNode;
}

export const Card = ({ as = "div", children, ...restProps }: ICardProps) => {
  const StyledCard = styled(as, cardRecipe);

  return <StyledCard {...restProps}>{children}</StyledCard>;
};

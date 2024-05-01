import { cardRecipe } from "@/recipes/cardRecipe";
import { styled } from "../../../../styled-system/jsx";
import { ReactNode } from "react";

interface ICardProps {
  as?: "div" | "section" | "article";
  outlined?: boolean;
  heavyShadow?: boolean;
  children: ReactNode;
}

export function Card({
  as = "div",
  outlined,
  heavyShadow,
  children,
  ...restProps
}: ICardProps) {
  const Tag = styled(as, cardRecipe);

  return (
    <Tag outlined={outlined} heavyShadow={heavyShadow} {...restProps}>
      {children}
    </Tag>
  );
}

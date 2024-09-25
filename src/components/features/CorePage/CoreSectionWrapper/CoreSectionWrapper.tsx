import { ReactNode } from "react";
import { HTMLStyledProps } from "../../../../../styled-system/types";
import { Text } from "@/components/core/Text/Text";
import { Section } from "@/components/core/Section/Section";

interface ICoreSectionWrapperProps extends HTMLStyledProps<"section"> {
  children: ReactNode;
  title: string;
}

export const CoreSectionWrapper = ({
  children,
  title,
  ...restProps
}: ICoreSectionWrapperProps) => {
  return (
    <Section {...restProps} w="full">
      <Text as="h3" fontSize="2xl" fontFamily="heading" fontWeight="bold">
        {title}
      </Text>
      {children}
    </Section>
  );
};

import { ReactNode } from "react";
import { HTMLStyledProps } from "@/styled-system/types";
import { Heading } from "@/components/core/Heading/Heading";
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
      <Heading as="h3">
        {title}
      </Heading>
      {children}
    </Section>
  );
};

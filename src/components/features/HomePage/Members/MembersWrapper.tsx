import { ComponentProps } from "react";
import { Section } from "@/components/core/Section/Section";
import { Grid } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";

type MembersWrapperProps = ComponentProps<typeof Section>;

export const MembersWrapper = ({
  children,
  ...restProps
}: MembersWrapperProps) => {
  return (
    <Section
      py={{ base: "0", sm: "16" }}
      pb={{ base: "12", sm: "16" }}
      {...restProps}
    >
      <Text
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        textAlign="center"
        mb="12"
      >
        Who We Are
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
        }}
        gap="8"
      >
        {children}
      </Grid>
    </Section>
  );
};

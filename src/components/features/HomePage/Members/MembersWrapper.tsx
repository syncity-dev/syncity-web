import { ComponentProps } from "react";
import { Section } from "@/components/core/Section/Section";
import { Grid } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { PageContainer } from "@/components/shared/PageContainer";

type MembersWrapperProps = ComponentProps<typeof Section>;

export const MembersWrapper = ({
  children,
  ...restProps
}: MembersWrapperProps) => {
  return (
    <Section py="16" {...restProps}>
      <PageContainer mx="auto" px="4">
        <Text as="h2" fontSize="3xl" textAlign="center" mb="12">
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
      </PageContainer>
    </Section>
  );
};

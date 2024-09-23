import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { PageContainer } from "@/components/shared/PageContainer";

export const Hero = () => {
  return (
    <Section py="16" bg="stone.200">
      <PageContainer mx="auto" px="4" textAlign="center">
        <Text as="h1" fontSize="4xl">
          Welcome to Synced
        </Text>
        <Text as="p" fontSize="xl" color="stone.700">
          We are a team of independent consultants primarily focused on
          long-term projects.
        </Text>
      </PageContainer>
    </Section>
  );
};

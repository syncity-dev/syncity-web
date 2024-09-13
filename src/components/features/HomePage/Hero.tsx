import { Section } from "@/components/core/Section/Section";
import { Container } from "../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";

export const Hero = () => {
  return (
    <Section py="16" bg="stone.200">
      <Container mx="auto" px="4" textAlign="center">
        <Text as="h1" fontSize="4xl">
          Welcome to Synced.dev
        </Text>
        <Text as="p" fontSize="xl" color="stone.700">
          We are a team of independent consultants primarily focused on
          long-term projects.
        </Text>
      </Container>
    </Section>
  );
};

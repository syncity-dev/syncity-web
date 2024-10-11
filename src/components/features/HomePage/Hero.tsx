import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { PageContainer } from "@/components/shared/PageContainer";

export const Hero = () => {
  return (
    <Section py="40" position="relative" bg="brand.50">
      <PageContainer
        mx="auto"
        px="4"
        textAlign="center"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          as="h1"
          fontSize="6xl"
          color="brand.950"
          fontWeight="bold"
          mt="10"
        >
          Welcome to Synced
        </Text>
        <Text
          as="p"
          fontSize="xl"
          color="brand.950"
          maxW="sm"
          textAlign="center"
          mb="5"
        >
          We are a team of independent consultants primarily focused on
          long-term projects.
        </Text>
      </PageContainer>
    </Section>
  );
};

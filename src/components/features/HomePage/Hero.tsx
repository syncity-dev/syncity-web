import { Section } from "@/components/core/Section/Section";
import { Text } from "@/components/core/Text/Text";
import { Logo } from "@/components/core/Logo/Logo";
import { Box, Flex } from "../../../../styled-system/jsx";

export const Hero = () => {
  return (
    <Section py="20" position="relative">
      <Box
        mx="auto"
        px="4"
        textAlign="center"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flexDir={{ base: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ base: "2.5", sm: "5" }}
          mb={{ base: "5", sm: "2.5" }}
        >
          <Text
            as="h1"
            fontSize={{ base: "6xl", md: "7xl" }}
            color="brand.950"
            fontWeight="bold"
            m="0"
          >
            Welcome to
          </Text>
          <Logo width={96} height={96} />
        </Flex>
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
      </Box>
    </Section>
  );
};

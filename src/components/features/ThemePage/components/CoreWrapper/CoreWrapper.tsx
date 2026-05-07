import { ReactNode } from "react";
import { Heading } from "@/components/core/Heading/Heading";
import { Container, VStack } from "@/styled-system/jsx";

export const CoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      py="10"
      maxWidth={{ base: "5xl" }}
      w="full"
    >
      <Heading as="h2" mb="2">
        Core Components
      </Heading>
      <VStack gap="4" alignItems="flex-start">
        {children}
      </VStack>
    </Container>
  );
};

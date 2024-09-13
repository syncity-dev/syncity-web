import { ReactNode } from "react";
import { VStack } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { Container } from "../../../../../styled-system/jsx";

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
      <Text
        as="h2"
        fontSize="3xl"
        fontFamily="heading"
        fontWeight="bold"
        mb="2"
      >
        Core Components
      </Text>
      <VStack gap="4" alignItems="flex-start">
        {children}
      </VStack>
    </Container>
  );
};

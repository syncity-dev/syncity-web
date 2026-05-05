import { CoreSectionWrapper } from "@/components/features/ThemePage/components/CoreSectionWrapper/CoreSectionWrapper";
import { CardBody, CardRoot } from "@/components/core/Card/Card";
import { Button } from "@/components/core/Button/Button";
import { Heading } from "@/components/core/Heading/Heading";
import { Flex, HStack, VStack } from "@/styled-system/jsx";

export const Buttons = () => {
  return (
    <CoreSectionWrapper title="Buttons">
      <CardRoot>
        <CardBody pt="6">
          <Flex flexWrap="wrap" gap="10">
            <VStack alignItems="flex-start">
              <Heading as="h4">Outline</Heading>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="4"
              >
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="outline" color="blue" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="slate" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="red" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="green" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="outline" color="blue" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="slate" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="red" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="green" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="outline" color="blue" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="slate" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="red" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="green" size="lg">
                    Label
                  </Button>
                </VStack>
              </HStack>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading as="h4">Solid</Heading>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="4"
              >
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="solid" color="blue" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="slate" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="red" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="green" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="solid" color="blue" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="slate" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="red" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="green" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="solid" color="blue" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="slate" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="red" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="green" size="lg">
                    Label
                  </Button>
                </VStack>
              </HStack>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading as="h4">Link</Heading>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="4"
              >
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="link" color="blue" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="slate" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="red" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="green" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="link" color="blue" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="slate" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="red" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="green" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="link" color="blue" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="slate" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="red" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="green" size="lg">
                    Label
                  </Button>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
        </CardBody>
      </CardRoot>
    </CoreSectionWrapper>
  );
};

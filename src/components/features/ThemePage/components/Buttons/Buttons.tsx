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
                  <Button visual="outline" color="accent" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="gray" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="danger" size="sm">
                    Label
                  </Button>
                  <Button visual="outline" color="success" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="outline" color="accent" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="gray" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="danger" size="md">
                    Label
                  </Button>
                  <Button visual="outline" color="success" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="outline" color="accent" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="gray" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="danger" size="lg">
                    Label
                  </Button>
                  <Button visual="outline" color="success" size="lg">
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
                  <Button visual="solid" color="accent" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="gray" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="danger" size="sm">
                    Label
                  </Button>
                  <Button visual="solid" color="success" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="solid" color="accent" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="gray" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="danger" size="md">
                    Label
                  </Button>
                  <Button visual="solid" color="success" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="solid" color="accent" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="gray" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="danger" size="lg">
                    Label
                  </Button>
                  <Button visual="solid" color="success" size="lg">
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
                  <Button visual="link" color="accent" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="gray" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="danger" size="sm">
                    Label
                  </Button>
                  <Button visual="link" color="success" size="sm">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="link" color="accent" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="gray" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="danger" size="md">
                    Label
                  </Button>
                  <Button visual="link" color="success" size="md">
                    Label
                  </Button>
                </VStack>
                <VStack flexDir="column-reverse" gap="4" flex={1}>
                  <Button visual="link" color="accent" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="gray" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="danger" size="lg">
                    Label
                  </Button>
                  <Button visual="link" color="success" size="lg">
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

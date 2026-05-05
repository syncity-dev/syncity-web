import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { CardRoot, CardBody, CardHeader } from "@/components/core/Card/Card";
import { Badge } from "@/components/core/Badge/Badge";
import { Heading } from "@/components/core/Heading/Heading";
import { Flex, HStack, VStack } from "@/styled-system/jsx";

export const Badges = () => {
  return (
    <CoreSectionWrapper title="Badges">
      <CardRoot>
        <CardBody pt="6">
          <Flex flexWrap="wrap" gap="10">
            <VStack
              alignItems="flex-start"
              bg="gray.plain.fg"
              p="5"
              rounded="sm"
              w="full"
            >
              <Heading as="h4" color="bg.default">
                Outline
              </Heading>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="4"
              >
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="sm" visual="outline">
                    Label
                  </Badge>
                  <Badge status="success" size="sm" visual="outline">
                    Label
                  </Badge>
                  <Badge status="warning" size="sm" visual="outline">
                    Label
                  </Badge>
                  <Badge status="danger" size="sm" visual="outline">
                    Label
                  </Badge>
                </VStack>
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="md" visual="outline">
                    Label
                  </Badge>
                  <Badge status="success" size="md" visual="outline">
                    Label
                  </Badge>
                  <Badge status="warning" size="md" visual="outline">
                    Label
                  </Badge>
                  <Badge status="danger" size="md" visual="outline">
                    Label
                  </Badge>
                </VStack>
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="lg" visual="outline">
                    Label
                  </Badge>
                  <Badge status="success" size="lg" visual="outline">
                    Label
                  </Badge>
                  <Badge status="warning" size="lg" visual="outline">
                    Label
                  </Badge>
                  <Badge status="danger" size="lg" visual="outline">
                    Label
                  </Badge>
                </VStack>
              </HStack>
            </VStack>
            <VStack
              alignItems="flex-start"
              bg="bg.subtle"
              p="5"
              rounded="sm"
              w="full"
            >
              <Heading as="h4">Solid</Heading>
              <HStack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="4"
              >
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="sm" visual="solid">
                    Label
                  </Badge>
                  <Badge status="success" size="sm" visual="solid">
                    Label
                  </Badge>
                  <Badge status="warning" size="sm" visual="solid">
                    Label
                  </Badge>
                  <Badge status="danger" size="sm" visual="solid">
                    Label
                  </Badge>
                </VStack>
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="md" visual="solid">
                    Label
                  </Badge>
                  <Badge status="success" size="md" visual="solid">
                    Label
                  </Badge>
                  <Badge status="warning" size="md" visual="solid">
                    Label
                  </Badge>
                  <Badge status="danger" size="md" visual="solid">
                    Label
                  </Badge>
                </VStack>
                <VStack gap="4" flex={1}>
                  <Badge status="default" size="lg" visual="solid">
                    Label
                  </Badge>
                  <Badge status="success" size="lg" visual="solid">
                    Label
                  </Badge>
                  <Badge status="warning" size="lg" visual="solid">
                    Label
                  </Badge>
                  <Badge status="danger" size="lg" visual="solid">
                    Label
                  </Badge>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
        </CardBody>
      </CardRoot>
    </CoreSectionWrapper>
  );
};

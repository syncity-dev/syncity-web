import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Badge } from "@/components/core/Badge/Badge";
import { Flex, HStack, VStack } from "../../../../../styled-system/jsx";
import { css } from "../../../../../styled-system/css";

export const Badges = () => {
  return (
    <CoreSectionWrapper title="Badges">
      <Card outlined>
        <Flex flexDirection={{ base: "column", md: "row" }} gap="10">
          <VStack alignItems="flex-start">
            <h4
              className={css({
                fontSize: "xl",
                fontFamily: "heading",
                fontWeight: "bold",
                bgColor: "",
                color: "",
              })}
            >
              Outline
            </h4>
            <HStack justifyContent="flex-start" alignItems="flex-start" gap="4">
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
          <VStack alignItems="flex-start">
            <h4
              className={css({
                fontSize: "xl",
                fontFamily: "heading",
                fontWeight: "bold",
                bgColor: "",
                color: "",
              })}
            >
              Solid
            </h4>
            <HStack justifyContent="flex-start" alignItems="flex-start" gap="4">
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
      </Card>
    </CoreSectionWrapper>
  );
};

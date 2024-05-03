import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Badge } from "@/components/core/Badge/Badge";
import { Flex, HStack, VStack } from "../../../../../styled-system/jsx";
import { css } from "../../../../../styled-system/css";

export function Badges() {
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
                <Badge
                  label="Label"
                  status="default"
                  size="sm"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="sm"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="sm"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="danger"
                  size="sm"
                  visual="outline"
                />
              </VStack>
              <VStack gap="4" flex={1}>
                <Badge
                  label="Label"
                  status="default"
                  size="md"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="md"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="md"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="danger"
                  size="md"
                  visual="outline"
                />
              </VStack>
              <VStack gap="4" flex={1}>
                <Badge
                  label="Label"
                  status="default"
                  size="lg"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="lg"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="lg"
                  visual="outline"
                />
                <Badge
                  label="Label"
                  status="danger"
                  size="lg"
                  visual="outline"
                />
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
                <Badge
                  label="Label"
                  status="default"
                  size="sm"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="sm"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="sm"
                  visual="solid"
                />
                <Badge label="Label" status="danger" size="sm" visual="solid" />
              </VStack>
              <VStack gap="4" flex={1}>
                <Badge
                  label="Label"
                  status="default"
                  size="md"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="md"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="md"
                  visual="solid"
                />
                <Badge label="Label" status="danger" size="md" visual="solid" />
              </VStack>
              <VStack gap="4" flex={1}>
                <Badge
                  label="Label"
                  status="default"
                  size="lg"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="success"
                  size="lg"
                  visual="solid"
                />
                <Badge
                  label="Label"
                  status="warning"
                  size="lg"
                  visual="solid"
                />
                <Badge label="Label" status="danger" size="lg" visual="solid" />
              </VStack>
            </HStack>
          </VStack>
        </Flex>
      </Card>
    </CoreSectionWrapper>
  );
}

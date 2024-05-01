import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Button } from "@/components/core/Button/Button";
import { Flex, HStack, VStack } from "../../../../../styled-system/jsx";
import { css } from "../../../../../styled-system/css";

export function Buttons() {
  return (
    <CoreSectionWrapper title="Buttons">
      <Card outlined>
        <Flex flexDirection={{ base: "column", md: "row" }} gap="4">
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
                <Button label="Label" visual="outline" color="gray" size="sm" />
                <Button label="Label" visual="outline" color="red" size="sm" />
                <Button
                  label="Label"
                  visual="outline"
                  color="yellow"
                  size="sm"
                />
              </VStack>
              <VStack gap="4" flex={1}>
                <Button label="Label" visual="outline" color="gray" size="md" />
                <Button label="Label" visual="outline" color="red" size="md" />
                <Button
                  label="Label"
                  visual="outline"
                  color="yellow"
                  size="md"
                />
              </VStack>
              <VStack gap="4" flex={1}>
                <Button label="Label" visual="outline" color="gray" size="lg" />
                <Button label="Label" visual="outline" color="red" size="lg" />
                <Button
                  label="Label"
                  visual="outline"
                  color="yellow"
                  size="lg"
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
                <Button label="Label" visual="solid" color="gray" size="sm" />
                <Button label="Label" visual="solid" color="red" size="sm" />
                <Button label="Label" visual="solid" color="yellow" size="sm" />
              </VStack>
              <VStack gap="4" flex={1}>
                <Button label="Label" visual="solid" color="gray" size="md" />
                <Button label="Label" visual="solid" color="red" size="md" />
                <Button label="Label" visual="solid" color="yellow" size="md" />
              </VStack>
              <VStack gap="4" flex={1}>
                <Button label="Label" visual="solid" color="gray" size="lg" />
                <Button label="Label" visual="solid" color="red" size="lg" />
                <Button label="Label" visual="solid" color="yellow" size="lg" />
              </VStack>
            </HStack>
          </VStack>
        </Flex>
      </Card>
    </CoreSectionWrapper>
  );
}

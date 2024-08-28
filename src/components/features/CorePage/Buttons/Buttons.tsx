import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Button } from "@/components/core/Button/Button";
import { Flex, HStack, VStack } from "../../../../../styled-system/jsx";
import { css } from "../../../../../styled-system/css";

export const Buttons = () => {
  return (
    <CoreSectionWrapper title="Buttons">
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
                <Button visual="outline" color="gray" size="sm">
                  Label
                </Button>
                <Button visual="outline" color="red" size="sm">
                  Label
                </Button>
                <Button visual="outline" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="outline" color="gray" size="md">
                  Label
                </Button>
                <Button visual="outline" color="red" size="md">
                  Label
                </Button>
                <Button visual="outline" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="outline" color="gray" size="lg">
                  Label
                </Button>
                <Button visual="outline" color="red" size="lg">
                  Label
                </Button>
                <Button visual="outline" color="yellow" size="lg">
                  Label
                </Button>
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
                <Button visual="solid" color="gray" size="sm">
                  Label
                </Button>
                <Button visual="solid" color="red" size="sm">
                  Label
                </Button>
                <Button visual="solid" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="solid" color="gray" size="md">
                  Label
                </Button>
                <Button visual="solid" color="red" size="md">
                  Label
                </Button>
                <Button visual="solid" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="solid" color="gray" size="lg">
                  Label
                </Button>
                <Button visual="solid" color="red" size="lg">
                  Label
                </Button>
                <Button visual="solid" color="yellow" size="lg">
                  Label
                </Button>
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
              Link
            </h4>
            <HStack justifyContent="flex-start" alignItems="flex-start" gap="4">
              <VStack gap="4" flex={1}>
                <Button visual="link" color="gray" size="sm">
                  Label
                </Button>
                <Button visual="link" color="red" size="sm">
                  Label
                </Button>
                <Button visual="link" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="link" color="gray" size="md">
                  Label
                </Button>
                <Button visual="link" color="red" size="md">
                  Label
                </Button>
                <Button visual="link" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack gap="4" flex={1}>
                <Button visual="link" color="gray" size="lg">
                  Label
                </Button>
                <Button visual="link" color="red" size="lg">
                  Label
                </Button>
                <Button visual="link" color="yellow" size="lg">
                  Label
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </Flex>
      </Card>
    </CoreSectionWrapper>
  );
};

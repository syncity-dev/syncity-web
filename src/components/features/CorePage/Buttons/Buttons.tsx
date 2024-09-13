import { CoreSectionWrapper } from "../CoreSectionWrapper/CoreSectionWrapper";
import { Card } from "@/components/core/Card/Card";
import { Button } from "@/components/core/Button/Button";
import { Flex, HStack, VStack } from "../../../../../styled-system/jsx";
import { css } from "../../../../../styled-system/css";

export const Buttons = () => {
  return (
    <CoreSectionWrapper title="Buttons">
      <Card>
        <Flex flexWrap="wrap" gap="10">
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
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="outline" color="black" size="sm">
                  Label
                </Button>
                <Button visual="outline" color="red" size="sm">
                  Label
                </Button>
                <Button visual="outline" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="outline" color="black" size="md">
                  Label
                </Button>
                <Button visual="outline" color="red" size="md">
                  Label
                </Button>
                <Button visual="outline" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="outline" color="black" size="lg">
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
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="solid" color="black" size="sm">
                  Label
                </Button>
                <Button visual="solid" color="red" size="sm">
                  Label
                </Button>
                <Button visual="solid" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="solid" color="black" size="md">
                  Label
                </Button>
                <Button visual="solid" color="red" size="md">
                  Label
                </Button>
                <Button visual="solid" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="solid" color="black" size="lg">
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
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="link" color="black" size="sm">
                  Label
                </Button>
                <Button visual="link" color="red" size="sm">
                  Label
                </Button>
                <Button visual="link" color="yellow" size="sm">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="link" color="black" size="md">
                  Label
                </Button>
                <Button visual="link" color="red" size="md">
                  Label
                </Button>
                <Button visual="link" color="yellow" size="md">
                  Label
                </Button>
              </VStack>
              <VStack flexDir="column-reverse" gap="4" flex={1}>
                <Button visual="link" color="black" size="lg">
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

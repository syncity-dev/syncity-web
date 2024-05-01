import { Button } from "@/components/core/Button/Button";
import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";
import { Card } from "@/components/core/Card/Card";
import { Divider, HStack, VStack } from "../../../styled-system/jsx";

export default function CoreComponents() {
  return (
    <section
      className={container({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        pt: "5",
      })}
    >
      <h2
        className={css({
          fontSize: "3xl",
          fontFamily: "heading",
          fontWeight: "bold",
          mb: "2",
        })}
      >
        Core Components
      </h2>
      <h3
        className={css({
          fontSize: "2xl",
          fontFamily: "heading",
          fontWeight: "bold",
          bgColor: "",
          color: "",
        })}
      >
        Buttons
      </h3>
      <Card outlined>
        <HStack gap="4">
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
          <Divider orientation="vertical" bgColor="gray.700" />
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
        </HStack>
      </Card>
      <h3
        className={css({
          fontSize: "2xl",
          fontFamily: "heading",
          fontWeight: "bold",
          mt: "4",
        })}
      >
        Cards
      </h3>
      <Card outlined heavyShadow mb="4">
        <div className={css({ w: "xl", h: "48" })}></div>
      </Card>
      <Card outlined>
        <div className={css({ w: "xl", h: "48" })}></div>
      </Card>
    </section>
  );
}

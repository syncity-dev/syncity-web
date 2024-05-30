import { ReactNode } from "react";
import { container } from "../../../../../styled-system/patterns";
import { css } from "../../../../../styled-system/css";
import { VStack } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";

export const CoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={container({
        position: "unset",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        py: "10",
      })}
    >
      <Text
        as="h2"
        className={css({
          fontSize: "3xl",
          fontFamily: "heading",
          fontWeight: "bold",
          mb: "2",
        })}
      >
        Core Components
      </Text>
      <VStack gap="4" alignItems="flex-start">
        {children}
      </VStack>
    </section>
  );
};

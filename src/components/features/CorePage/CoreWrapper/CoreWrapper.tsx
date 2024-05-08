import { ReactNode } from "react";
import { container } from "../../../../../styled-system/patterns";
import { css } from "../../../../../styled-system/css";
import { VStack } from "../../../../../styled-system/jsx";

export const CoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={container({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        py: "10",
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
      <VStack gap="4" alignItems="flex-start">
        {children}
      </VStack>
    </section>
  );
};

import { Button } from "@/components/core/Button/Button";
import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { Card } from "@/components/core/Card/Card";
import { Text } from "@/components/core/Text/Text";

export default function Home() {
  return (
    <section
      className={container({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "5",
      })}
    >
      <Card outlined>
        <h2
          className={css({
            fontSize: "3xl",
            fontFamily: "heading",
            fontWeight: "bold",
            bgColor: "",
            color: "",
            letterSpacing: "wider",
          })}
        >
          Hello Synced 🐼!
        </h2>
        <Text as="p" fontSize="sm">
          Check out some of the core components built
        </Text>
        <Button visual="outline" color="red" size="md" href="/core">
          Core Components
        </Button>
      </Card>
    </section>
  );
}

import { Button } from "@/components/core/Button/Button";
import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { Card } from "@/components/core/Card/Card";

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
          })}
        >
          Hello Syncity 🐼!
        </h2>
        <Button
          label="Go to Core"
          visual="outline"
          color="red"
          size="md"
          href="/core"
        />
      </Card>
    </section>
  );
}

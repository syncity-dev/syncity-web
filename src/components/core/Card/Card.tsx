import type { ComponentProps } from "react";
import { createStyleContext } from "@/styled-system/jsx";
import { card } from "@/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(card);

export type CardRootProps = ComponentProps<typeof CardRoot>;
export const CardRoot = withProvider("div", "root");
export const CardHeader = withContext("div", "header");
export const CardBody = withContext("div", "body");
export const CardFooter = withContext("h3", "footer");
export const CardTitle = withContext("h3", "title");
export const CardDescription = withContext("div", "description");

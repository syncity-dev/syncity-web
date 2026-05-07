import { createRootRoute } from "@tanstack/react-router";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto-condensed/500.css";
import { RootLayout } from "@/components/shared/RootLayout/RootLayout";
import { NotFound } from "@/components/shared/NotFound/NotFound";
import appCss from "./globals.css?url";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Syncity" },
      {
        name: "description",
        content:
          "A team of independent consultants primarily focused on long-term projects.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootLayout,
});

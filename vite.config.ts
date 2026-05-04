import path from "path";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  server: { port: 3000 },
  resolve: {
    alias: { "@": path.resolve("./src") },
  },
  plugins: [
    tanstackStart({
      srcDirectory: "src",
      router: {
        routesDirectory: "app",
        basepath: "/",
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
      sitemap: {
        enabled: true,
        host: "https://syncity.dev",
      },
    }),
    viteReact(),
  ],
});

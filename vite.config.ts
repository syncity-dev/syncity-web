import path from "path";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/syncity-web/" : "/",
  server: { port: 3000 },
  resolve: {
    alias: { "@": path.resolve("./src") },
  },
  plugins: [
    tanstackStart({
      srcDirectory: "src",
      router: {
        routesDirectory: "app",
        basepath: isProd ? "/syncity-web" : "/",
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
    }),
    viteReact(),
  ],
});

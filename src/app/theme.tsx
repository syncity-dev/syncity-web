import { createFileRoute, redirect } from "@tanstack/react-router";
import { Theme } from "@/components/features/ThemePage/Theme";

export const Route = createFileRoute("/theme")({
  beforeLoad: () => {
    if (import.meta.env.PROD) {
      throw redirect({ to: "/" });
    }
  },
  component: Theme,
});

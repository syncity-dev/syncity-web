import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/features/HomePage/Home";

export const Route = createFileRoute("/")({
  component: Home,
});

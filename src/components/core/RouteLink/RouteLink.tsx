import { Link } from "@tanstack/react-router";
import { styled } from "@/styled-system/jsx";
import type { ComponentProps } from "react";

export const RouteLink = styled(Link);
export type RouteLinkProps = ComponentProps<typeof RouteLink>;

import { Link } from '@tanstack/react-router';
import type { ComponentProps } from 'react';

import { styled } from '@/styled-system/jsx';

export const RouteLink = styled(Link);
export type RouteLinkProps = ComponentProps<typeof RouteLink>;

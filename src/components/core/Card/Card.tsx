import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';

import { createStyleContext } from '@/styled-system/jsx';
import { card } from '@/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(card);

export type CardRootProps = ComponentProps<typeof CardRoot>;
export const CardRoot = withProvider(ark.div, 'root');
export const CardHeader = withContext(ark.div, 'header');
export const CardBody = withContext(ark.div, 'body');
export const CardFooter = withContext(ark.div, 'footer');
export const CardTitle = withContext(ark.h3, 'title');
export const CardDescription = withContext(ark.div, 'description');

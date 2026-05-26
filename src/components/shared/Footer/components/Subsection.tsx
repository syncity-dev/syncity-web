import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import type { StackProps } from '@/styled-system/jsx';
import { Stack } from '@/styled-system/jsx';

type SubsectionProps = StackProps & {
  title: string;
};

export const Subsection = ({ children, title, ...props }: SubsectionProps) => (
  <Stack bg="bg.default" gap="4" {...props}>
    <Eyebrow>{title}</Eyebrow>
    <Stack gap="2">{children}</Stack>
  </Stack>
);

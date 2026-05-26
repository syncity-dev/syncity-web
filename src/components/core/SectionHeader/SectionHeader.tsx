import { Children, type ReactNode } from 'react';

import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import type { HTMLStyledProps } from '@/styled-system/jsx';
import { Box, Flex } from '@/styled-system/jsx';

type SectionHeaderProps = Omit<HTMLStyledProps<'div'>, 'children' | 'columns'> & {
  eyebrow: string;
  children: ReactNode;
};

export const SectionHeader = ({ eyebrow, children, ...props }: SectionHeaderProps) => {
  const [heading, body] = Children.toArray(children);

  return (
    <Box mb="10" {...props}>
      <Eyebrow mb="3">{eyebrow}</Eyebrow>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gap="6"
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        {heading}
        {body}
      </Flex>
    </Box>
  );
};

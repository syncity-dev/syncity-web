import type { HTMLStyledProps } from '@/styled-system/jsx';
import { Box } from '@/styled-system/jsx';

export const HeaderWrapper = ({ children, ...props }: HTMLStyledProps<'div'>) => (
  <Box
    as="header"
    position="sticky"
    top="3"
    mt="3"
    mx="auto"
    px={{ base: '4', md: '8' }}
    maxWidth="7xl"
    zIndex="header"
    {...props}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="bg.default/80"
      backdropFilter="blur(14px)"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border.default"
      rounded="l4"
      shadow="sm"
      p="2"
    >
      {children}
    </Box>
  </Box>
);

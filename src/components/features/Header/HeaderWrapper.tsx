import type { HstackProps } from '@/styled-system/jsx';
import { Container, styled } from '@/styled-system/jsx';

type HeaderWrapperProps = HstackProps & {
  children: React.ReactNode;
};

export const HeaderWrapper = ({ children, ...restProps }: HeaderWrapperProps) => {
  return (
    <styled.header
      display="flex"
      shadow="md"
      w="full"
      p={2.5}
      position="sticky"
      top={0}
      zIndex="header"
      justifyContent="center"
      alignItems="center"
      bg="bg.default"
      isolation="isolate"
      {...restProps}
    >
      <Container
        maxWidth={{ base: '5xl' }}
        display="flex"
        justifyContent="space-between"
        w="full"
        padding={0}
        bgColor="inherit"
      >
        {children}
      </Container>
    </styled.header>
  );
};

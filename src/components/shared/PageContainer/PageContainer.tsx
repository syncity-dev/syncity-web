import type { ContainerProps } from '@/styled-system/jsx';
import { Container } from '@/styled-system/jsx';

export const PageContainer = ({ ...restProps }: ContainerProps) => {
  return <Container maxWidth={{ base: '5xl' }} mx={{ base: 'unset', lg: 'auto' }} {...restProps} />;
};

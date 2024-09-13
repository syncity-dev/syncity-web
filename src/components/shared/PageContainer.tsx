import { Container, ContainerProps } from "../../../styled-system/jsx";

export const PageContainer = ({ ...restProps }: ContainerProps) => {
  return <Container maxWidth={{ base: "5xl" }} {...restProps} />;
};

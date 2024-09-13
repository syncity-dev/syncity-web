import { HStack, Container, HstackProps } from "../../../../styled-system/jsx";
import { Z_INDEX } from "@/constants/styles";

interface INavWrapperProps extends HstackProps {
  children: React.ReactNode;
}

export const NavWrapper = ({ children, ...restProps }: INavWrapperProps) => {
  return (
    <HStack
      w="$full"
      p={2.5}
      borderBottom={"2px solid"}
      position="sticky"
      top={0}
      zIndex={Z_INDEX.header}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      {...restProps}
    >
      <Container
        maxWidth={{ base: "5xl" }}
        display="flex"
        justifyContent="space-between"
        w="full"
        padding={0}
        bgColor="inherit"
      >
        {children}
      </Container>
    </HStack>
  );
};

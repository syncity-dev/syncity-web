import { styled } from "../../../styled-system/jsx";
import { Text } from "../core/Text/Text";

export const Footer = () => {
  return (
    <styled.footer
      p={{ base: "5", sm: "10" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="5px 5px 15px rgb(0 0 0 / 0.1), 2px 5px 10px rgb(0 0 0 / 0.1), 0 5px 10px rgb(0 0 0 / 0.1)"
    >
      <Text color="stone.500" fontSize="sm" fontWeight="semibold">
        © 2024 Syncity
      </Text>
    </styled.footer>
  );
};

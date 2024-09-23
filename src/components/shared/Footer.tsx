import { styled } from "../../../styled-system/jsx";
import { Text } from "../core/Text/Text";

export const Footer = () => {
  return (
    <styled.footer
      bg="stone.50"
      p="10"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="stone.500" fontSize="sm" fontWeight="semibold">
        © 2024 Synced
      </Text>
    </styled.footer>
  );
};

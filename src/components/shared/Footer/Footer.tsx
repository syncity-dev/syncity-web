import { styled } from "@/styled-system/jsx";
import { Text } from "@/components/core/Text/Text";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <styled.footer
      p={{ base: "5", sm: "10" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="top"
    >
      <Text color="fg.muted" fontSize="sm" fontWeight="semibold">
        © {currentYear} Syncity
      </Text>
    </styled.footer>
  );
};

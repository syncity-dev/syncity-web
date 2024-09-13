import { GridItem, Flex } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { Link } from "@/components/core/Link/Link";

type MemberProps = {
  name: string;
  title: string;
  description: string;
};

export const Member = ({ name, title, description }: MemberProps) => {
  return (
    <GridItem display="flex" textAlign="center" flexDir="column">
      <Flex
        rounded="full"
        w="32"
        h="32"
        mx="auto"
        mb="4"
        justifyContent="center"
        alignItems="center"
        bg="stone.200"
        shadow="inner-sm"
      />

      <Text as="h3" fontSize="xl" fontWeight="semibold" mb="2">
        {name}
      </Text>
      <Text color="stone.600" mb="2">
        {title}
      </Text>
      <Text fontSize="sm" color="stone.500" mb="4" flex="1">
        {description}
      </Text>
      <Link
        display="block"
        href="#"
        color="blue.600"
        _hover={{ color: "blue.700", textDecoration: "underline" }}
      >
        Learn more
      </Link>
    </GridItem>
  );
};

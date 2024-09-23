import Link from "next/link";
import Image from "next/image";
import { HStack, Box, Flex } from "../../../../styled-system/jsx";
import { Text } from "../Text/Text";
import { BiSync } from "react-icons/bi";

export const Logo = () => {
  return (
    <Link href="/">
      <Flex
        rounded="full"
        display="flex"
        justifyContent="center"
        alignContent="center"
        border="1px solid"
        textAlign="center"
        px={{ base: "2", md: "4" }}
        py={{ base: "6", md: "8" }}
      >
        <Text
          as="h1"
          fontFamily="heading"
          fontSize={{ base: "sm", md: "md" }}
          color="stone.900"
          letterSpacing="wider"
          textTransform="uppercase"
          m="0"
          h="auto"
        >
          Synced
        </Text>

        {/* <Image
            src="/Logo, v4.png"
            width={200}
            height={200}
            alt="Syncity Logo"
            style={{ position: "absolute", inset: 0 }}
          /> */}
      </Flex>
    </Link>
  );
};

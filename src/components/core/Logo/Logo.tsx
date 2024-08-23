import Link from "next/link";
import Image from "next/image";
import { HStack, Box } from "../../../../styled-system/jsx";
import { Text } from "../Text/Text";

export const Logo = () => {
  return (
    <Link href="/">
      <HStack>
        <Box
          position="relative"
          w={{ base: 14, md: 16 }}
          h={{ base: 14, md: 16 }}
          rounded="full"
          border="2px solid"
        >
          {/* <Image
            src="/Logo, v4.png"
            width={200}
            height={200}
            alt="Syncity Logo"
            style={{ position: "absolute", inset: 0 }}
          /> */}
        </Box>
        <Text
          as="h1"
          fontFamily="heading"
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wider"
        >
          Synced
        </Text>
      </HStack>
    </Link>
  );
};

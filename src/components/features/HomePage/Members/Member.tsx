import { GridItem } from "../../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { styled } from "../../../../../styled-system/jsx";
import Image from "next/image";

type MemberProps = {
  name: string;
  title: string;
  description: string;
  imgSrc: string | null;
};

export const Member = ({ name, title, description, imgSrc }: MemberProps) => {
  return (
    <GridItem display="flex" textAlign="center" flexDir="column">
      <Avatar
        position="relative"
        rounded="full"
        w="32"
        h="32"
        mx="auto"
        mb="4"
        justifyContent="center"
        alignItems="center"
        bg="stone.200"
        shadow="xl"
        outlineOffset={0.5}
        outlineColor="brand.600"
        overflow="hidden"
        _hover={{
          translateX: "100px",
        }}
      >
        {imgSrc ? (
          <Image src={imgSrc} alt={name} fill priority sizes="(100vw, 100vh)" />
        ) : null}
      </Avatar>

      <Text as="h3" fontSize="xl" mb="2">
        {name}
      </Text>
      <Text color="stone.600" mb="2">
        {title}
      </Text>
      <Text fontSize="sm" color="stone.500" mb="4" flex="1">
        {description}
      </Text>
    </GridItem>
  );
};

const Avatar = styled.button;

import { GridItem } from "@/styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { Heading } from "@/components/core/Heading/Heading";
import { Flex, styled } from "@/styled-system/jsx";
import { Link } from "@/components/core/Link/Link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Image } from "@unpic/react";
import { css } from "@/styled-system/css";

type MemberProps = {
  name: string;
  title: string;
  description: string;
  imgSrc: string | null;
  githubLink: string;
  linkedinLink: string;
};

export const Member = ({
  name,
  title,
  description,
  imgSrc,
  githubLink,
  linkedinLink,
}: MemberProps) => {
  return (
    <GridItem
      display="flex"
      textAlign="center"
      alignItems="center"
      flexDir="column"
    >
      <AvatarWrapper rounded="full" w="32" h="32" mx="auto" mb="4" shadow="xl">
        <Avatar
          rounded="full"
          w="full"
          h="full"
          justifyContent="center"
          alignItems="center"
          outlineOffset={0.5}
          outlineColor="accent.emphasis"
          overflow="hidden"
          _hover={{
            translateX: "100px",
          }}
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={name}
              width={128}
              height={128}
              className={css({ objectFit: "cover", w: "100%", h: "100%" })}
              layout="constrained"
            />
          ) : null}
        </Avatar>
      </AvatarWrapper>

      <Heading as="h3" textStyle="lg" mb="2">
        {name}
      </Heading>
      <Text color="fg.muted" mb="1">
        {title}
      </Text>
      <Text fontSize="sm" color="fg.muted" flex="1">
        {description}
      </Text>
      <Flex flexDir="row" gap="1">
        <Link
          href={githubLink}
          target="_blank"
          visual="plain"
          display="flex"
          alignItems="center"
          fontSize="sm"
          p="2"
        >
          <BsGithub size="1em" />
        </Link>
        <Link
          href={linkedinLink}
          target="_blank"
          visual="plain"
          display="flex"
          alignItems="center"
          fontSize="sm"
          p="2"
        >
          <BsLinkedin size="1em" />
        </Link>
      </Flex>
    </GridItem>
  );
};

const AvatarWrapper = styled.div;
const Avatar = styled.button;

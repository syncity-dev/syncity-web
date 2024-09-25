import { Box, Flex } from "../../../../styled-system/jsx";
import { Text } from "@/components/core/Text/Text";
import { styled } from "../../../../styled-system/jsx";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "@/components/core/Link/Link";

type MemberProps = {
  name: string;
  title: string;
  description: string;
  imgSrc: string | null;
  about: string;
  githubLink: string;
  linkedinLink: string;
};

const CloseButton = styled.button;

export const DisclosurePopoverDemo = (member: MemberProps) => {
  const { imgSrc, name, title, description } = member;

  return (
    <Flex textAlign="center" flexDir="column">
      <styled.button
        //@ts-ignore
        popoverTarget="disclose"
        popoverTargetAction="toggle"
        rounded="full"
        w="32"
        h="32"
        mx="auto"
        mb="4"
        justifyContent="center"
        alignItems="center"
        bg="stone.200"
        shadow="inner-sm"
        className="member-avatar"
        position="relative"
        overflow="hidden"
      >
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            fill
            style={{
              position: "absolute",
              inset: 0,
              height: "100%",
              width: "100%",
            }}
          />
        ) : null}
      </styled.button>
      <Popover {...member} />

      <Text as="h3" fontSize="xl" fontWeight="semibold" mb="2">
        {name}
      </Text>
      <Text color="stone.600" mb="2">
        {title}
      </Text>
      <Text fontSize="sm" color="stone.500" mb="4" flex="1">
        {description}
      </Text>
    </Flex>
  );
};

const Popover = ({
  name,
  imgSrc,
  about,
  githubLink,
  linkedinLink,
}: MemberProps) => {
  return (
    <div
      //@ts-ignore
      popover="auto"
      id="disclose"
      class="disclosure"
    >
      <styled.header position="relative">
        <styled.span
          display="block"
          rounded="full"
          w="32"
          h="32"
          mx="auto"
          mb="4"
          justifyContent="center"
          alignItems="center"
          bg="stone.200"
          shadow="inner-sm"
          position="relative"
          overflow="hidden"
          flexShrink={0}
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={name}
              fill
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
              }}
            />
          ) : null}
        </styled.span>
        <Flex flexDir="column">
          <Text
            as="h3"
            fontSize="md"
            fontWeight="semibold"
            mt="2"
            mr="5"
            textAlign="start"
          >
            {name}
          </Text>
          <Box mt="1">
            <Link
              href={githubLink}
              target="_blank"
              display="flex"
              alignItems="center"
              gap="1"
              fontSize="sm"
              _hover={{ color: "sky.600" }}
            >
              <BsGithub size="1em" />
              GitHub
            </Link>
            <Link
              href={linkedinLink}
              target="_blank"
              display="flex"
              alignItems="center"
              gap="1"
              fontSize="sm"
              _hover={{ color: "sky.600" }}
            >
              <BsLinkedin size="1em" />
              LinkedIn
            </Link>
          </Box>
        </Flex>
        <CloseButton
          //@ts-ignore
          popoverTarget="disclose"
          popoverTargetAction="close"
          className="close-button"
        >
          <BiX size={30} />
        </CloseButton>
      </styled.header>
      <div className="content">
        <Text textAlign="start">{about}</Text>
      </div>
    </div>
  );
};

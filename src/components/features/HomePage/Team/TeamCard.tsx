import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { CardBody, CardFooter, CardRoot } from '@/components/core/Card/Card';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { LinkButton } from '@/components/core/LinkButton/LinkButton';
import { Text } from '@/components/core/Text/Text';
import { Box, styled } from '@/styled-system/jsx';

const Img = styled('img');

type TeamCardProps = {
  name: string;
  title: string;
  description: string;
  badge: string;
  imgSrc: string;
  githubLink: string;
  linkedinLink: string;
};

export const TeamCard = ({
  name,
  title,
  description,
  badge,
  imgSrc,
  githubLink,
  linkedinLink,
}: TeamCardProps) => (
  <CardRoot
    asChild
    variant="outline"
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    _motionReduce={{ transition: 'none', _hover: { transform: 'none', shadow: 'none' } }}
  >
    <article data-group>
      <Box position="relative" overflow="hidden" aspectRatio="4 / 4.6">
        <Img
          src={imgSrc}
          alt={`${name}, ${title}`}
          position="absolute"
          inset="0"
          w="full"
          h="full"
          objectFit="cover"
          display="block"
          filter="grayscale(0.15)"
          transition="filter 0.4s, transform 0.5s"
          _groupHover={{ filter: 'grayscale(0)', transform: 'scale(1.04)' }}
          _motionReduce={{ transition: 'none' }}
          loading="lazy"
        />
        <Eyebrow
          position="absolute"
          top="3"
          left="3"
          zIndex="1"
          px="2"
          py="1"
          rounded="full"
          bg="color-mix(in srgb, var(--colors-bg-default) 88%, transparent)"
          backdropFilter="blur(8px)"
          color="fg.muted"
        >
          {badge}
        </Eyebrow>
      </Box>

      <CardBody pt="5" gap="1">
        <Heading as="h4" textStyle="lg" fontWeight="semibold">
          {name}
        </Heading>
        <Text size="sm" color="fg.muted">
          {title}
        </Text>
        <Text size="sm" color="fg.muted" mt="2">
          {description}
        </Text>
      </CardBody>

      <CardFooter
        justifyContent="flex-start"
        borderTopWidth="1px"
        borderTopStyle="dashed"
        borderTopColor="border.default"
      >
        <LinkButton
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          variant="plain"
          size="sm"
          aspectRatio="1"
          px="0"
          py="0"
          aria-label="GitHub"
        >
          <BsGithub />
        </LinkButton>
        <LinkButton
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
          variant="plain"
          size="sm"
          aspectRatio="1"
          px="0"
          py="0"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </LinkButton>
      </CardFooter>
    </article>
  </CardRoot>
);

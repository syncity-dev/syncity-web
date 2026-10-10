import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

import { Diamond } from '@/components/core/Diamond/Diamond';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Icon } from '@/components/core/Icon/Icon';
import { Text } from '@/components/core/Text/Text';
import { AuthorAvatar } from '@/components/features/Blog/AuthorAvatar/AuthorAvatar';
import { getAuthor } from '@/components/features/Blog/authors';
import { css, cx } from '@/styled-system/css';
import { Flex, Stack, styled } from '@/styled-system/jsx';
import { focusRing } from '@/theme/focus';
import { interactiveTransition, textTransition } from '@/theme/motion/transitions';
import { formatPostDate } from '@/utils/date';
import type { PostSummary } from '@/utils/posts';

type PostRowProps = {
  post: PostSummary;
  /** The newest post gets a larger title. */
  isLatest: boolean;
};

// A class instead of `styled(Link)`, which loses the route types that check `params`.
const rowClass = css({
  display: 'grid',
  gridTemplateColumns: { base: 'minmax(0, 1fr)', md: '13rem minmax(0, 1fr) token(sizes.10)' },
  gap: { base: '4', md: '8' },
  py: { base: '6', md: '8' },
  px: { base: '0', md: '4' },
  color: 'inherit',
  textDecoration: 'none',
  ...interactiveTransition,
  _hover: { bg: 'gray.surface.bg.hover' },
  // Inset so the ring isn't hidden by the rows above and below.
  _focusVisible: { ...focusRing, outlineOffset: '-2px' },
});

const PostDate = styled('time', { base: { textStyle: 'eyebrow', color: 'fg.muted' } });

export const PostRow = ({ post, isLatest }: PostRowProps) => {
  const author = getAuthor(post.author);

  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className={cx('group', rowClass)}>
      <Flex
        direction={{ base: 'row', md: 'column' }}
        justifyContent={{ base: 'space-between', md: 'flex-start' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        gap="3"
      >
        <PostDate dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</PostDate>
        <Flex alignItems="center" gap="2" textStyle="sm" color="fg.muted">
          <AuthorAvatar imgSrc={author.imgSrc} size="sm" />
          {author.name}
        </Flex>
      </Flex>

      <Stack gap="3" minWidth="0">
        <Heading
          as="h2"
          textStyle={{ base: '2xl', md: isLatest ? '4xl' : '3xl' }}
          textWrap="balance"
          {...textTransition}
          _groupHover={{ color: 'accent.default' }}
        >
          {post.title}
        </Heading>
        <Text size="lg" color="fg.muted">
          {post.description}
        </Text>
        {post.tags && post.tags.length > 0 && (
          <Flex alignItems="center" gap="2">
            <Diamond />
            <Eyebrow>{post.tags.join(' · ')}</Eyebrow>
          </Flex>
        )}
      </Stack>

      <Icon asChild color="fg.muted" mt="2" display={{ base: 'none', md: 'block' }}>
        <ArrowRight />
      </Icon>
    </Link>
  );
};

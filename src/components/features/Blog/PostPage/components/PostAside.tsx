import { Diamond } from '@/components/core/Diamond/Diamond';
import { AuthorAvatar } from '@/components/features/Blog/AuthorAvatar/AuthorAvatar';
import { getAuthor } from '@/components/features/Blog/authors';
import { Box, Flex, styled } from '@/styled-system/jsx';
import { formatPostDate } from '@/utils/date';
import type { PostSummary } from '@/utils/posts';

type PostAsideProps = {
  post: PostSummary;
};

const Facts = styled('dl', {
  base: {
    display: 'flex',
    flexDirection: { base: 'row', lg: 'column' },
    gap: { base: '8', lg: '4' },
    pt: { base: '0', lg: '6' },
    borderTopWidth: { base: '0', lg: 'thin' },
    borderColor: 'border.default',
  },
});

const FactLabel = styled('dt', {
  base: { textStyle: 'eyebrow', color: 'fg.muted', mb: '1' },
});

const FactValue = styled('dd', {
  base: { display: 'flex', alignItems: 'center', gap: '2', textStyle: 'sm' },
});

export const PostAside = ({ post }: PostAsideProps) => {
  const author = getAuthor(post.author);

  return (
    <Flex
      as="aside"
      aria-label="About this post"
      direction={{ base: 'row', lg: 'column' }}
      flexWrap="wrap"
      justifyContent={{ base: 'space-between', lg: 'flex-start' }}
      alignItems={{ base: 'center', lg: 'stretch' }}
      alignSelf="start"
      gap="6"
      position={{ lg: 'sticky' }}
      top={{ lg: '24' }}
    >
      <Flex alignItems="center" gap="3">
        <AuthorAvatar imgSrc={author.imgSrc} size="lg" />
        <Box>
          <Box textStyle="sm" fontWeight="semibold">
            {author.name}
          </Box>
          <Box textStyle="xs" color="fg.muted">
            {author.role}
          </Box>
        </Box>
      </Flex>

      <Facts>
        <div>
          <FactLabel>Published</FactLabel>
          <FactValue>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          </FactValue>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div>
            <FactLabel>Tags</FactLabel>
            <FactValue>
              <Diamond />
              {post.tags.join(' · ')}
            </FactValue>
          </div>
        )}
      </Facts>
    </Flex>
  );
};

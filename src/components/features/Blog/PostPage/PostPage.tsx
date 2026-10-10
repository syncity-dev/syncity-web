import type { MarkdownDocument } from '@tanstack/markdown';
import { ArrowLeft } from 'lucide-react';

import { Heading } from '@/components/core/Heading/Heading';
import { Icon } from '@/components/core/Icon/Icon';
import { RouteLink } from '@/components/core/RouteLink/RouteLink';
import { Text } from '@/components/core/Text/Text';
import { PostBody } from '@/components/features/Blog/PostBody/PostBody';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';
import { Grid, Stack, styled } from '@/styled-system/jsx';
import { link } from '@/styled-system/recipes';
import { formatPostDate } from '@/utils/date';
import type { PostSummary } from '@/utils/posts';

import { PostAside } from './components/PostAside';
import { PostNav } from './components/PostNav';

type PostPageProps = {
  post: PostSummary & { document: MarkdownDocument };
  older?: PostSummary;
  newer?: PostSummary;
};

const PostDate = styled('time', { base: { textStyle: 'eyebrow', color: 'fg.muted' } });

const BackLink = styled(RouteLink, {
  base: { display: 'inline-flex', alignItems: 'center', gap: '2', textStyle: 'sm' },
});

export const PostPage = ({ post, older, newer }: PostPageProps) => (
  <PageContainer width="full">
    <Stack gap="5" alignItems="flex-start" maxWidth="4xl" pt="12" pb="10">
      <BackLink to="/blog" className={link({ visual: 'subtle' })}>
        <Icon asChild boxSize="4">
          <ArrowLeft />
        </Icon>
        All posts
      </BackLink>
      <PostDate dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, 'long')}</PostDate>
      <Heading as="h1" textStyle="sectionTitle" textWrap="balance">
        {post.title}
      </Heading>
      <Text size="lg" color="fg.muted" maxWidth="2xl">
        {post.description}
      </Text>
    </Stack>

    <Grid
      gridTemplateColumns={{ base: 'minmax(0, 1fr)', lg: '14rem minmax(0, 1fr)' }}
      gap={{ base: '8', lg: '16' }}
      pt="10"
      borderTopWidth="thin"
      borderColor="border.default"
    >
      <PostAside post={post} />
      {/* Drives the reading progress around the header on phones (ReadingProgress) */}
      <styled.article viewTimelineName="--post-body">
        <PostBody document={post.document} />
      </styled.article>
    </Grid>

    <PostNav older={older} newer={newer} />
  </PageContainer>
);

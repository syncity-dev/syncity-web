import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Text } from '@/components/core/Text/Text';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';
import { Stack } from '@/styled-system/jsx';
import type { PostSummary } from '@/utils/posts';

import { PostList } from './components/PostList';

type BlogIndexProps = {
  /** Published posts, newest first. Never empty: /blog is a 404 without posts. */
  posts: PostSummary[];
};

export const BlogIndex = ({ posts }: BlogIndexProps) => (
  <PageContainer width="full">
    <Stack gap="5" pt="20" pb="12">
      <Eyebrow>The blog</Eyebrow>
      <Heading as="h1" textStyle="sectionTitle">
        Notes from the <DisplayItalic>long</DisplayItalic> haul.
      </Heading>
      <Text size="lg" color="fg.muted" maxWidth="xl">
        What we learn keeping software in production for years, written by the three of us when
        there is something worth saying.
      </Text>
    </Stack>

    <PostList posts={posts} />
  </PageContainer>
);

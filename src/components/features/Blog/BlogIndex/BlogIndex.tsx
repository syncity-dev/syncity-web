import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Text } from '@/components/core/Text/Text';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';
import { BLOG_DESCRIPTION } from '@/constants/blog';
import { Stack } from '@/styled-system/jsx';
import type { PostSummary } from '@/utils/postFrontmatter';

import { PostList } from './components/PostList';

type BlogIndexProps = {
  /** Published posts, newest first. */
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
        {BLOG_DESCRIPTION}
      </Text>
    </Stack>

    <PostList posts={posts} />
  </PageContainer>
);

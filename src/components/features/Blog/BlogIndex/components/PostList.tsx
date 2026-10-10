import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { styled } from '@/styled-system/jsx';
import type { PostSummary } from '@/utils/posts';

import { PostRow } from './PostRow';

type PostListProps = {
  posts: PostSummary[];
};

const ListItem = styled('li', { base: { bg: 'bg.default' } });

export const PostList = ({ posts }: PostListProps) => (
  <HairlineGrid gridTemplateColumns="minmax(0, 1fr)" innerAs="ul">
    {posts.map((post, index) => (
      <ListItem key={post.slug}>
        <PostRow post={post} isLatest={index === 0} />
      </ListItem>
    ))}
  </HairlineGrid>
);

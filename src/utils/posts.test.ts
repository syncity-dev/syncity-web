import { describe, expect, it } from 'vitest';

import { collectPosts, getAllPosts, getPostBySlug, parsePost, postAuthors } from './posts';

const post = (frontmatter: string, body = 'Body copy.') => `---\n${frontmatter}\n---\n\n${body}\n`;

const asModule = (raw: string) => ({ default: raw });

describe('parsePost', () => {
  it('parses a post with every field populated', () => {
    const result = parsePost(
      '../content/posts/hello-world.md',
      post(
        [
          'title: Hello World',
          'description: A first post.',
          "publishedAt: '2026-09-20'",
          'draft: false',
          'author: Andrija Kapetanović',
          'ogImage: https://syncity.dev/og/hello-world.png',
          'tags:\n  - react\n  - panda',
        ].join('\n'),
      ),
    );

    expect(result).toEqual({
      slug: 'hello-world',
      title: 'Hello World',
      description: 'A first post.',
      publishedAt: '2026-09-20',
      draft: false,
      author: 'Andrija Kapetanović',
      ogImage: 'https://syncity.dev/og/hello-world.png',
      tags: ['react', 'panda'],
      content: 'Body copy.',
    });
  });

  it('defaults draft to false and leaves optional fields undefined', () => {
    const result = parsePost(
      '../content/posts/minimal.md',
      post('title: Minimal\ndescription: Just the basics.\npublishedAt: 2026-01-02'),
    );

    expect(result.draft).toBe(false);
    expect(result.author).toBe('Syncity Team');
    expect(result.ogImage).toBeUndefined();
    expect(result.tags).toBeUndefined();
  });

  it('accepts an unquoted date, which YAML parses as a Date', () => {
    const result = parsePost(
      '../content/posts/unquoted-date.md',
      post('title: Unquoted\ndescription: No quotes.\npublishedAt: 2026-03-04'),
    );

    expect(result.publishedAt).toBe('2026-03-04');
  });

  it.each([
    ['missing title', 'description: No title.\npublishedAt: 2026-01-01', 'title'],
    ['missing description', 'title: No description\npublishedAt: 2026-01-01', 'description'],
    ['missing publishedAt', 'title: No date\ndescription: No date.', 'publishedAt'],
    [
      'malformed publishedAt',
      "title: Bad date\ndescription: Bad date.\npublishedAt: 'not-a-date'",
      'publishedAt',
    ],
    [
      'unknown author',
      "title: Bad author\ndescription: Bad author.\npublishedAt: 2026-01-01\nauthor: 'Some Rando'",
      'author',
    ],
    [
      'wrong draft type',
      "title: Bad draft\ndescription: Bad draft.\npublishedAt: 2026-01-01\ndraft: 'yes'",
      'draft',
    ],
  ])('fails on %s, naming the file and the field', (_label, frontmatter, field) => {
    expect(() => parsePost('../content/posts/broken.md', post(frontmatter))).toThrow(
      new RegExp(`broken\\.md[\\s\\S]*${field}`),
    );
  });

  it('rejects a filename that would not produce a URL-safe slug', () => {
    expect(() =>
      parsePost(
        '../content/posts/Not A Slug.md',
        post('title: Bad slug\ndescription: Bad slug.\npublishedAt: 2026-01-01'),
      ),
    ).toThrow(/URL-safe slug/);
  });
});

describe('author', () => {
  const withAuthor = (author: string) =>
    parsePost(
      '../content/posts/bylined.md',
      post(`title: Bylined\ndescription: Bylined.\npublishedAt: 2026-01-01\nauthor: ${author}`),
    );

  it.each(postAuthors)('accepts %s', (author) => {
    expect(withAuthor(author).author).toBe(author);
  });

  it('lists the permitted authors in the failure message', () => {
    expect(() => withAuthor('Nobody')).toThrow(/author/);
  });
});

describe('collectPosts', () => {
  const modules = {
    '../content/posts/oldest.md': asModule(
      post('title: Oldest\ndescription: Oldest post.\npublishedAt: 2026-01-01'),
    ),
    '../content/posts/newest.md': asModule(
      post('title: Newest\ndescription: Newest post.\npublishedAt: 2026-06-01'),
    ),
    '../content/posts/middle.md': asModule(
      post('title: Middle\ndescription: Middle post.\npublishedAt: 2026-03-01'),
    ),
    '../content/posts/unfinished.md': asModule(
      post('title: Unfinished\ndescription: A draft.\npublishedAt: 2026-09-01\ndraft: true'),
    ),
  };

  it('sorts posts by publishedAt, newest first', () => {
    expect(collectPosts(modules, { includeDrafts: false }).map((p) => p.slug)).toEqual([
      'newest',
      'middle',
      'oldest',
    ]);
  });

  it('excludes drafts when drafts are not included', () => {
    expect(collectPosts(modules, { includeDrafts: false }).map((p) => p.slug)).not.toContain(
      'unfinished',
    );
  });

  it('keeps drafts when drafts are included', () => {
    expect(collectPosts(modules, { includeDrafts: true }).map((p) => p.slug)).toContain(
      'unfinished',
    );
  });

  it('propagates a validation failure rather than skipping the post', () => {
    expect(() =>
      collectPosts({
        '../content/posts/broken.md': asModule(post('title: Only a title')),
      }),
    ).toThrow(/broken\.md/);
  });
});

describe('getAllPosts', () => {
  // Exercises the real `import.meta.glob` wiring against `src/content/posts`,
  // without asserting on content that will change as posts are written.
  it('resolves every committed post through the schema', () => {
    const posts = getAllPosts();

    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
      expect(post.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(post.title).not.toHaveLength(0);
      expect(post.description).not.toHaveLength(0);
    }
  });

  it('finds a post by slug and returns undefined for an unknown one', () => {
    const [first] = getAllPosts();

    expect(getPostBySlug(first.slug)).toEqual(first);
    expect(getPostBySlug('no-such-post')).toBeUndefined();
  });
});

import { notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { staticFunctionMiddleware } from '@tanstack/start-static-server-functions';

import { parsePostMarkdown } from './markdown';
import { getPostBySlug } from './posts';

/**
 * Loads one post with its body parsed to a markdown AST. Call it from a route
 * loader. `staticFunctionMiddleware` writes the result to a JSON file during
 * prerender, and client-side navigations fetch that file instead of calling a
 * server — so parsing happens once, at build time, and neither the parser nor
 * the raw markdown ships to the browser.
 */
export const getPostDocument = createServerFn({ method: 'GET' })
  .middleware([staticFunctionMiddleware])
  .validator((slug: string) => slug)
  .handler(({ data: slug }) => {
    const post = getPostBySlug(slug);

    if (!post) {
      throw notFound();
    }

    const { content, ...frontmatter } = post;

    return { ...frontmatter, document: parsePostMarkdown(content) };
  });

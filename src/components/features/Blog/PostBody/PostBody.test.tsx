import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { parsePostMarkdown } from '@/utils/markdown';
import { getPostBySlug } from '@/utils/posts';

import { PostBody } from './PostBody';

// Renders the committed draft fixture, which exercises every supported node type.
const fixture = getPostBySlug('markdown-fixture');

if (!fixture) {
  throw new Error('src/content/posts/markdown-fixture.md is missing');
}

const document = parsePostMarkdown(fixture.content);
const html = renderToStaticMarkup(<PostBody document={document} />);

describe('PostBody against the markdown fixture', () => {
  it('produces an AST that survives JSON serialization unchanged', () => {
    // Loader data crosses the server/client boundary, so the AST must be plain data.
    expect(JSON.parse(JSON.stringify(document))).toEqual(document);
  });

  it('routes headings through the Heading recipe with slug ids', () => {
    expect(html).toMatch(/<h1 class="[^"]*heading--as_h1[^"]*" id="heading-one">/);
    expect(html).toMatch(/<h2 class="[^"]*heading--as_h2[^"]*" id="lists">/);
    expect(html).toMatch(/<h3 class="[^"]*heading--as_h3[^"]*" id="table">/);
    expect(html).toMatch(/<h4 class="[^"]*heading--as_h4[^"]*" id="code">/);
  });

  it('routes paragraphs and links through the Text and Link recipes', () => {
    expect(html).toMatch(/<p class="[^"]*text--as_p[^"]*">Inline formatting/);
    expect(html).toMatch(/<a href="https:\/\/syncity\.dev" title="Syncity" class="link[^"]*">/);
  });

  it('renders inline formatting', () => {
    expect(html).toContain('<strong>strong</strong>');
    expect(html).toContain('<em>emphasis</em>');
    expect(html).toContain('<del>strikethrough</del>');
  });

  it('keeps tight lists inline and nests mixed list types', () => {
    expect(html).toMatch(/<li[^>]*>First item<\/li>/);
    expect(html).toMatch(
      /<ul[^>]*>[\s\S]*<li[^>]*>Nested item<\/li>[\s\S]*<ol[^>]*>[\s\S]*Deep ordered item/,
    );
  });

  it('wraps loose list items in paragraphs, including follow-on paragraphs', () => {
    expect(html).toMatch(/<li[^>]*><p[^>]*>First item, as a paragraph\.<\/p><\/li>/);
    expect(html).toMatch(/Second item, as a paragraph\.<\/p><p[^>]*>With a second paragraph/);
  });

  it('wraps tables in a focusable scroll region and keeps column alignment', () => {
    expect(html).toMatch(
      /<div[^>]*role="region"[^>]*aria-label="Table"[^>]*tabindex="0"[^>]*><table/,
    );
    expect(html).toContain('style="text-align:center"');
    expect(html).toContain('style="text-align:right"');
  });

  it('distinguishes inline code from highlighted fenced code', () => {
    expect(html).toMatch(/<code class="ff_mono[^"]*bg_bg\.muted[^"]*">inline code<\/code>/);
    expect(html).toMatch(/<pre[^>]*tabindex="0"[^>]*><code class="[^"]*language-tsx">/);
    expect(html).toContain('<span class="th-token th-keyword">import</span>');
    expect(html).toContain('<span class="th-token th-comment">// Renders a section title.</span>');
  });

  it('falls back to plaintext for a fence with no language', () => {
    expect(html).toMatch(/<code class="[^"]*language-plaintext">A fence with no language/);
  });

  it('renders images through @unpic/react', () => {
    expect(html).toMatch(
      /<img src="\/logos\/og-image\.png" alt="The Syncity logo"[^>]*class="bdr_l3"/,
    );
    expect(html).toMatch(/<img[^>]*loading="lazy"[^>]*decoding="async"/);
  });

  it('keeps block content nested inside blockquotes', () => {
    expect(html).toMatch(
      /<blockquote[^>]*>[\s\S]*<ul[^>]*>[\s\S]*Quoted item one[\s\S]*<\/ul>[\s\S]*<\/blockquote>/,
    );
  });

  it('links footnote references to a footnotes section with a hidden label', () => {
    expect(html).toContain('href="#user-content-fn-1"');
    expect(html).toContain('href="#user-content-fn-named"');
    expect(html).toMatch(/<section data-footnotes=""[^>]*>/);
    expect(html).toMatch(
      /<h2(?=[^>]*class="sr_true")(?=[^>]*id="footnote-label")[^>]*>Footnotes<\/h2>/,
    );
    expect(html).toContain('aria-label="Back to reference 1"');
  });
});

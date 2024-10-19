import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import tailwind from '@astrojs/tailwind';

// Astro configuration
export default defineConfig({
  site: 'https://kevinvinther.github.io',
  base: '/',

  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [
      remarkMath,
      [remarkToc, { heading: 'Table of Contents', maxDepth: 3 }],
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },

  integrations: [tailwind()],
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  syntaxHighlight: 'shiki',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false
    }
  },
  output: "server",
  adapter: netlify()
});
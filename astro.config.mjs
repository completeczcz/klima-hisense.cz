import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import czechNbsp from './integrations/czech-nbsp.mjs';

export default defineConfig({
  site: 'https://klima-hisense.cz',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    czechNbsp(),
    sitemap({
      filter: (page) => !/\/(dekujeme|404)\/?$/.test(page),
      changefreq: 'weekly',
    }),
  ],
});

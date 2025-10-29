// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gameon-events.web.app',
  output: 'static',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto'
  }
});

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wheel-rent.netlify.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});

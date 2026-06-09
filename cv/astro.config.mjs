import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabi-gandine.github.io',
  base: '/cv-site',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
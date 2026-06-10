import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabi-gandine.github.io',
  base: '/ds881-curriculo-GRR20234968', 
  output: 'static',
  build: {
    assets: 'assets'
  }
});
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dlgo2003.github.io',
  base: '/Portafolio',
  vite: {
    plugins: [tailwindcss()],
  },
});

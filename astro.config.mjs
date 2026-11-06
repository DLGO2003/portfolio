// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  //site: 'https://dlgo2003.github.io',
  site: 'http://ltq7n0hoxd9g1pzhhb9ftqzp.149.130.187.189.sslip.io',
  base: '/Portafolio',
  vite: {
    plugins: [tailwindcss()],
  },
});

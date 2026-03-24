import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://maodas.online',

  integrations: [tailwind(), mdx(), icon()],
  vite: {
    ssr: {
      external: []
    }
  }
});
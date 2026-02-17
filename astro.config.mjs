/Documentos/portafolio-maodas/astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  vite: {
    ssr: {
      external: []
    }
  }
});
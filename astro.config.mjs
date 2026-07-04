// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Die Domain der Website — wird für Canonical-URLs, Sitemap und Open Graph verwendet.
export default defineConfig({
  site: 'https://www.blickmacherei.de',
  integrations: [sitemap()],
  vite: {
    // Nötig, weil das Projekt unter einem Pfad mit "~" liegt (D:\~KI\...)
    server: { fs: { strict: false } },
  },
});

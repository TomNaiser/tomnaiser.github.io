import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: process.env.BUILD_DIR || './dist',
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { server: { watch: { ignored: ['**/.local/**', '**/Archive/**'] } } },
});

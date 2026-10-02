import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://salinahydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});

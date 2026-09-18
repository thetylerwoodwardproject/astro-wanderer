// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set this to your production URL (no trailing slash)
  site: 'https://example.com',
  // Set this to your site's subpath if it is NOT hosted at the domain root
  // (e.g. GitHub Pages project sites). Must match your GitHub repo's name for
  // project-site URLs (username.github.io/<repo>) to resolve. Delete this
  // line if your site lives at "/".
  base: '/astro-podcaster',
  integrations: [sitemap()],
});

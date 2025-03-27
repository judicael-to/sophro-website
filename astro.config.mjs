// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

export default defineConfig({
	site: 'https://www.votredomaine.fr',
	integrations: [tailwind(), sitemap(), preact()],
	adapter: vercel({
		webAnalytics: {
		enabled: true, // set to false when using @vercel/analytics@1.4.0
		},
	}),
});

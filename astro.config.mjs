// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	site: 'https://www.votredomaine.fr',
	integrations: [tailwind(), sitemap(), preact()],
	output: 'server',
	adapter: vercel({
		webAnalytics: {
		enabled: false, // set to false when using @vercel/analytics@1.4.0
		},
	}),
});

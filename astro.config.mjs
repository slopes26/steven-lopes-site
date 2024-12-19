// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
		build: {
			rollupOptions: {
				input: {
					main: './src/pages/index.astro',
					styles: './src/styles/global.css', // Ensure this is part of the build
				},
			},
		},
	},
});
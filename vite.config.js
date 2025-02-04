import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
				@use "sass:math";
				@use "$lib/scss/mixins.scss" as *;
				`
			}
		}
	}
});

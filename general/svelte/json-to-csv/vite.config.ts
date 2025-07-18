import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'e2e/**']
	}
});

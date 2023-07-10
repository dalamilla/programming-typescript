import { test, expect } from '@playwright/test';

test('vite init page', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Vite/);
});

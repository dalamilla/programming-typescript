import { test, expect } from '@playwright/test';

test('check title page', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Roman/);
});

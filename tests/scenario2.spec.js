import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();
});

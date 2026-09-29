import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Running and debugging tests' }).click();
  await expect(page.getByRole('heading', { name: 'Running and debugging tests' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Running and debugging tests' })).toBeVisible();
});
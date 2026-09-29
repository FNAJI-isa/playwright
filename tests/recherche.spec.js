import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('locators');
  await page.getByRole('option', { name: 'Locators', exact: true }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();
});
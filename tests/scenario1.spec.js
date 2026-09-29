import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Generating tests').click();
  await page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Generating tests').click();
  await expect(page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Generating tests')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Breadcrumbs' }).getByText('Generating tests')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Generating tests' })).toBeVisible();
});
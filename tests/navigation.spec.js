import { test, expect } from '@playwright/test';
import testData from './Data/testData.json';
import { naviguerVersRubrique } from './utils/playwrightHelpers.js';
 
for (const rubrique of testData.navigation) {
 
test(`Navigation vers ${rubrique.lien}`, async ({ page }) => {
 
await page.goto('https://playwright.dev/docs/intro');
 
await naviguerVersRubrique(page, rubrique.lien);
 
await expect(
page.getByRole('heading', {
name: rubrique.titre,
exact: true
})
).toBeVisible();
 
});
 
}
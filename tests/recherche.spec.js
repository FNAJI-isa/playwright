import { test, expect } from '@playwright/test';
import testData from './Data/testData.json';
import { rechercher } from './utils/playwrightHelpers.js';
 
for (const recherche of testData.recherches) {
 
test(`Recherche : ${recherche.nom}`, async ({ page }) => {
 
await page.goto('https://playwright.dev/docs/intro');
 
const champRecherche = await rechercher(
page,
recherche.valeur
);
 
await expect(champRecherche).toHaveValue(recherche.valeur);
});
 
}
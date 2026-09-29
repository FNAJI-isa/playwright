export async function rechercher(page, valeur) {
await page.getByRole('button', { name: 'Search (Control+k)' }).click();
 
const champRecherche = page.getByRole('searchbox', { name: 'Search' });
 
await champRecherche.fill(valeur);
 
return champRecherche;
}
 
export async function naviguerVersRubrique(page, lien) {
await page.getByRole('link', {
name: lien,
exact: true
}).click();
}
//contient les fonctions communes pour éviter de répéter le même code.
import { test, expect } from '@playwright/test';
test('filters update URL and results', async ({ page }) => {
  await page.goto('/case-studies');
  // Example interaction; UI must render a label matching 'Industry'
  await page.getByLabel('Industry').getByText('Dental').click();
  await expect(page).toHaveURL(/industry=Dental/);
});


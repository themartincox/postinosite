import { test, expect } from '@playwright/test';
test('header nav is keyboard accessible', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab'); // focus skip link
  await page.keyboard.press('Tab'); // focus Services
  await expect(page.locator('button.nav-trigger')).toBeFocused();
  await page.keyboard.press('Enter'); // open mega
  await expect(page.locator('.mega')).toBeVisible();
  await page.keyboard.press('Escape'); // close
  await expect(page.locator('.mega')).toBeHidden();
});

test('primary order matches spec', async ({ page }) => {
  await page.goto('/');
  const items = page.locator('.nav-row .nav-item .nav-link');
  await expect(items.nth(0)).toHaveText('Industries');
  await expect(items.nth(1)).toHaveText('Resources');
  await expect(items.nth(2)).toHaveText('About');
  await expect(items.nth(3)).toHaveText('Case Studies'); // last
});


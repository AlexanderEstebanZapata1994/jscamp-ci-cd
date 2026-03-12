// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

async function hasABreadcrumb(page) {
    await page.goto('https://playwright.dev/docs/writing-tests');
    await expect(page.getByRole('link', { name: 'Getting started - VS Code' })).toBeVisible();
    await page.getByRole('link', { name: 'actionability' }).click();
    await expect(page.getByRole('heading', { name: 'Auto-waiting' })).toBeVisible();
}
test('has a breadcrumb', async ({ page }) => {
    await hasABreadcrumb(page);
});
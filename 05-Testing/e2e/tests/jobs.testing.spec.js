import { test, expect } from '@playwright/test';

// Priority use roles, arias
// Secondary text tags, placeholders, labels, names, values, etc
// Tertiary data-testid
// CSS selectors (not recommended)
test('should look for a React job and apply to it', async ({ page }) => {
    await page.goto('http://localhost:5173/')

    const searchInput = page.getByRole('searchbox', { name: 'Search'});
    await searchInput.fill('React');

    await page.getByRole('button', { name: 'Search'}).click();

    const jobCards = page.getByRole('article');
    await expect(jobCards.first()).toBeVisible();

    const firstJobTitle = jobCards.first().getByRole('heading', { level: 3 });
    await expect(firstJobTitle).toHaveText('Desarrollador de Software Senior');

    await page.getByRole('button', { name: 'Login'}).click();

    const applyButton = page.getByText('Apply Now').first();
    await applyButton.click();

    const appliedButton = page.getByText('Applied').first();
    await expect(appliedButton).toBeVisible();
})
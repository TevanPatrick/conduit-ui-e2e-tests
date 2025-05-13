import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import { ArticlePage } from '../page-objects/articlePage';

test('View full article page - TC-R3', async ({ page }) => {

    // Test Case: TC-R3 - Verify a reader can view full article page.

    const homePage = new HomePage(page);
    const articlePage = new ArticlePage(page);

    const articleTitle = 'If you can see this, your frontend is connected to the backend.';
    const articleContent = 'If you can see this, your frontend is connected to the backend.';

    await homePage.goto();
    await page.waitForLoadState();

    // Open full article page.
    await homePage.articlePreviewLink.getByText(articleTitle).click();
    await page.waitForLoadState();

    // Expect new article page to be visible
    await expect.soft(page).toHaveURL(process.env.articleUrl+`if-you-can-see-this-your-frontend-is-connected-to-the-backend`);
    await expect.soft(articlePage.titleInput).toHaveText(articleTitle);
    await expect.soft(articlePage.articleContentInput).toHaveText(articleContent);

});
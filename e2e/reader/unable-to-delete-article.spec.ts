import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import { ArticlePage } from '../page-objects/articlePage';

test('Unable to delete an article as an unauthenticated user - TC-R7', async ({ page }) => {

    // Test Case: TC-R7 - Verify a reader cannot delete an article.

    const homePage = new HomePage(page);
    const articlePage = new ArticlePage(page);

    const articleTitle = 'If you can see this, your frontend is connected to the backend.';
    const articleContent = 'If you can see this, your frontend is connected to the backend.';

    await homePage.goto();
    await page.waitForLoadState();

    // Open full article page.
    await homePage.articlePreviewLink.getByText(articleTitle).click();
    await page.waitForLoadState();

    // Expect reader user cannot delete article, delete button is hidden.
    await expect(articlePage.deleteArticleButton).not.toBeVisible();

});
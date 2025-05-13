import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import {LoginPage} from '../page-objects/loginPage';
import { NewArticleEditorPage } from '../page-objects/newArticleEditorPage';
import { ArticlePage } from '../page-objects/articlePage';

test('Confirm if user wants to delete article - TC-B15', async ({ page }) => {

    // Test Case: TC-B15 - Verify a blogger can cancel article deletion acton.

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const newArticleEditorPage = new NewArticleEditorPage(page);
    const articlePage = new ArticlePage(page);

    function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const titleNumber = getRandomNumber(1000, 9999);
    const title = 'Test title input ' + titleNumber;
    const about = 'Test about input';
    const articleContent = 'Test article input';
    const tags = '#TestTagsInput';

    await homePage.goto();
    await loginPage.login(process.env.authEmail, process.env.authPassword);

    // Create new article
    await homePage.newArticleNavLink.click();
    await newArticleEditorPage.addNewArticle(title,about,articleContent,tags);
    await page.waitForURL(process.env.articleUrl+`test-title-input-${titleNumber}`);
    await page.waitForLoadState();

    // Expect new article page to be visible
    await expect.soft(page).toHaveURL(process.env.articleUrl+`test-title-input-${titleNumber}`);

    await articlePage.deleteArticleButton.nth(0).click();

    await expect.soft(articlePage.confirmationDialog).toBeVisible();

    // Expect new article page to be visible
    await expect.soft(page).not.toHaveURL(process.env.articleUrl+`test-title-input-${titleNumber}`);

});
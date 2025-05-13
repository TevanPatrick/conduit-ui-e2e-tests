import { test, expect } from '@playwright/test';
import {LoginPage} from '../page-objects/loginPage';
import { NewArticleEditorPage } from '../page-objects/newArticleEditorPage';
import { SettingsPage } from '../page-objects/settingsPage';

test('Unauthenticated user cannot login with non existing username - TC-S3', async ({ page }) => {

    // Test Case: TC-S3 - Verify a user cannot login with non existing username.

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await page.waitForLoadState();

    // Try to login without username
    await loginPage.login(process.env.invalidEmail, process.env.invalidPassword);

    // Expect user unable to login without existing username
    await loginPage.assertLoginFailed();

});

import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly articlePreviewLink: Locator;
  readonly newArticleNavLink: Locator;
  readonly settingsNavLink: Locator;
  readonly usernameNavLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articlePreviewLink = page.locator(".preview-link");
    this.newArticleNavLink = page.locator('li:has-text("New Article")');
    this.settingsNavLink = page.locator('li:has-text("Settings")');
    this.usernameNavLink = page.locator(".nav-link");
  }

  async goto(){
    await this.page.goto(process.env.homeUrl);
  }

}
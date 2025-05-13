import { Page, Locator, expect } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;
  readonly settingsHeading: Locator;
  readonly updateSettingsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settingsHeading = page.locator('h1:has-text("Your Settings")');
    this.updateSettingsButton = page.locator('button:has-text("Update Settings")');
  }

  async navigateToSettingsPage(){
    await this.page.goto(process.env.settingsUrl);
  }

}
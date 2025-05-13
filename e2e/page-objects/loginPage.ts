import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signinNavLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signinButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signinNavLink = page.locator('li:has-text("Sign in ")');
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signinButton = page.locator('button:has-text("Sign in")');
    this.errorMessage = page.locator('.error-messages');
  }

  async login(email: string, password: string){
    await this.signinNavLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signinButton.click();
  }

  async assertLoginFailed(){
    await expect.soft(this.errorMessage).toHaveText("body User not found");
  }

  async navigateToLoginPage(){
    await this.page.goto(process.env.loginUrl);
  }

}
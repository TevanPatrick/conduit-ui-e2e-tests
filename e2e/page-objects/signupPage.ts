import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupNavLink: Locator;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signupButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupNavLink = page.locator('li:has-text("Sign up ")');
    this.usernameInput = page.getByPlaceholder('Username');
    this.emailInput = page.getByPlaceholder('Email');
    this.passwordInput = page.getByPlaceholder('Password');
    this.signupButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.locator('.error-messages');
  }

  async signup(username: string, email: string, password: string){

    function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const userNumber = getRandomNumber(1000, 9999);
    const emailService = "@gmail.com";

    await this.signupNavLink.click();
    await this.usernameInput.fill(username+userNumber);
    await this.emailInput.fill(email+userNumber+emailService);
    await this.passwordInput.fill(password);
    await this.signupButton.click();
  }

  async assertLoginFailed(){
    await expect.soft(this.errorMessage).toHaveText("body User already registered");
  }

  async navigateToSignupPage(){
    await this.page.goto(process.env.signupUrl);
  }

}
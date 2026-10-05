// LoginPage.ts
import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/LoginPageLocators';

export class LoginPage {
  readonly locators: LoginPageLocators;

  constructor(page: Page) {
    this.locators = new LoginPageLocators(page);
  }

  async login(username: string, password: string) {
    await this.locators.loginButton.click();
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton2.click();
    
  }
}

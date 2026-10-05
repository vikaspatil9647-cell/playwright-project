// export const LoginPageLocators = {
//   usernameInput: '#username',
//   passwordInput: '#password',
//   //loginButton: "getByRole('link', { name: 'Login' });"

// };


// LoginPageLocators.ts
import { Page, Locator } from '@playwright/test';

export class LoginPageLocators {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginButton2: Locator;

  constructor(page: Page) {
    this.usernameInput = page.getByLabel('Email ID / Username');
    this.passwordInput = page.locator('//input[@placeholder="Enter your password"]');
    this.loginButton = page.getByRole('link', { name: 'Login' });
    this.loginButton2 = page.locator('button.btn-primary.loginButton');
  }
}





//  await page.goto('https://www.naukri.com/');
//   await page.getByRole('link', { name: 'Login' }).click();
//   await page.getByRole('textbox', { name: 'Email ID / Username' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('button', { name: 'Login', exact: true }).cl
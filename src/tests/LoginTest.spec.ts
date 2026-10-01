import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
//import { ScreenshotUtil } from '../utils/ScreenshotUtil';

test('Valid login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.naukri.com/');
//   await loginPage.clickLogin();
//   await loginPage.enterUsername('testuser');
//   await loginPage.enterPassword('password123');
    await loginPage.login('vikas' , '123');
  

 // await ScreenshotUtil.takeScreenshot(page, 'LoginTestResult');
});

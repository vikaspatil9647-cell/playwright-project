import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';

test('Valid login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.naukri.com/');
//   await loginPage.clickLogin();

    await loginPage.login('vikaspatil9647@gmail.com' , 'Tester@123');
     //await loginPage.enterUsername('testuser');
//   await loginPage.enterPassword('password123');
  console.log("New changes merged");
  

 await ScreenshotUtil.captureScreenshot(page, 'LoginTestResult');
});

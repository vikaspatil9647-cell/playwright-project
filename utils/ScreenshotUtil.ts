// import { Page } from '@playwright/test';
// import * as fs from 'fs';

// export class ScreenshotUtil {
//   static async takeScreenshot(page: Page, fileName: string) {
//     const screenshotPath = `screenshots/${fileName}.png`;
//     await page.screenshot({ path: screenshotPath, fullPage: true });

//     if (!fs.existsSync('screenshots')) {
//       fs.mkdirSync('screenshots');
//     }
//   }
// }

// import { Page } from '@playwright/test';

// export class ScreenshotUtil {
//   static async captureScreenshot(
//     page: Page,
//     fileName: string
//   ): Promise<void> {
//     await page.screenshot({
//       path: `screenshots/${fileName}.png`,
//       fullPage: true
//     });
//   }
// }

// 



import { Page } from '@playwright/test';

export class ScreenshotUtil {
  static async captureScreenshot(
    page: Page,
    fileName: string
  ): Promise<void> {
    await page.screenshot({
      path: `test-results/screenshots/${fileName}.png`,
      fullPage: true
    });
  }
}
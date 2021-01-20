import { init, page, browser } from './global/puppeter-config';

(async () => {
  await init()
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
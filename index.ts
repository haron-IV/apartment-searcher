import { init, browser } from './global/puppeteer-config';
import olx from './services/olx/index'

(async () => {
  await init()
  await olx()

  await browser.close();
})();
import * as dotenv from 'dotenv'
import { init, browser } from './global/puppeteer-config'
import olx from './services/olx/index'
dotenv.config();

(async () => {
  await init()
  await olx()

  await browser.close();
})();
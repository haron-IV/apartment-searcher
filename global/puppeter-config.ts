import * as puppeteer from 'puppeteer'

export let browser = null
export let page = null

const browserSize = [1920, 1080]

export const init = async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      // userDataDir: './browser-data',
      args: [
        `--window-size=${browserSize[0]},${browserSize[1]}`
      ]
    }
  )
  page = await browser.newPage()

  await page.setViewport({
    width: browserSize[0],
    height: browserSize[1],
  });
}
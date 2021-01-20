import * as puppeteer from 'puppeteer'

export let browser: puppeteer.Browser | null = null
export let page: puppeteer.Page | null = null

const browserSize: Array<number> = [1920, 1080]

export const init = async (): Promise<void> => {
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
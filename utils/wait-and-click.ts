import { page } from '../global/puppeteer-config'

export const waitAndClick = async (selector: string): Promise<void> => {
  await page.waitForSelector(selector)
  await page.click(selector)
}
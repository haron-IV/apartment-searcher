import { page } from '../../global/puppeteer-config'
import urls from '../../global/urls'
import { acceptCookies } from './accept-cookies';

export default async (): Promise<void> => {
  await page.goto(urls.olx.origin, { waitUntil: 'networkidle0' })
  await acceptCookies()
  await page.waitForTimeout(5000)
}

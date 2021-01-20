import { page } from '../../global/puppeteer-config'
import urls from '../../global/urls'
import { acceptCookies } from './accept-cookies';
import { olxSearcherUrl } from '../../utils/url-builder'

export default async (): Promise<void> => {
  await page.goto(urls.olx.origin, { waitUntil: 'networkidle0' })
  await acceptCookies()
  await page.goto(`${urls.olx.origin}${olxSearcherUrl(
      Number(process.env.PRICE_FROM),
      Number(process.env.PRICE_TO),
      Number(process.env.METERS_FROM),
      Number(process.env.METERS_TO),
      process.env.ROOMS.split(',').map(el => Number(el))
    )}`, { waitUntil: 'networkidle0' })
  await page.waitForTimeout(20000)
}

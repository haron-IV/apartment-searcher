import { waitAndClick } from './../../utils/wait-and-click';
import el from './elements'

export const acceptCookies = async (): Promise<void> => {
  await waitAndClick(el.acceptCookiesBtn)
}
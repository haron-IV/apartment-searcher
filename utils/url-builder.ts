import urls from '../global/urls'
import { OlxSearcherUrl } from '../types/url-builder'

const bracketLeft = '%5B'
const bracketRight = '%5D'

const getStringNameFromNumber = (number: number): string => {
  switch (number) {
    case 1: {
      return 'one'
    }
    case 2: {
      return 'two'
    }
    case 3: {
      return 'three'
    }
    case 4: {
      return 'four'
    }
  }
}


const createRoomsUrlParameter = (rooms: Array<number>): string => {
  let urlParameter: string = ''

  rooms.forEach( (room, i) => {
    const r = getStringNameFromNumber(room)
    urlParameter = urlParameter.concat(`&search${bracketLeft}filter_enum_rooms${bracketRight}${bracketLeft}${i}${bracketRight}=${getStringNameFromNumber(room)}`)
  })

  return urlParameter
} 

export const olxSearcherUrl: OlxSearcherUrl = (priceFrom, priceTo, fromSquareMeters, toSquareMeters, rooms) => {
  const priceFromString: string = `${bracketLeft}filter_float_price%3Afrom${bracketRight}=${priceFrom}`
  const priceToString: string = `&search${bracketLeft}filter_float_price%3Ato${bracketRight}=${priceTo}`
  const fromSquareMetersString: string = `&search${bracketLeft}filter_float_m%3Afrom${bracketRight}=${fromSquareMeters}`
  const toSquareMetersString: string = `&search${bracketLeft}filter_float_m%3Ato${bracketRight}=${toSquareMeters}`

  return `${urls.olx.realEstatesSale}/?search${priceFromString}${priceToString}${fromSquareMetersString}${toSquareMetersString}${createRoomsUrlParameter(rooms)}`
}
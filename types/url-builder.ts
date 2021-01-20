export interface OlxSearcherUrl {
  (
  priceFrom: number,
  priceTo: number,
  fromSquareMeters: number,
  toSquareMeters: number,
  rooms: Array<number>,
  city: string
  ): string
}
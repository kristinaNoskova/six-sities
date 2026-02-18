export const Setting = {
  OfferCount: 315,
} as const;

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const CARD_IMAGE_SIZE = {
  CITIES_WIDTH: 260,
  CITIES_HEIGHT: 200,
  FAVORITES_WIDTH: 150,
  FAVORITES_HEIGHT: 110,
} as const;

export const MAX_RATING = 5;

export const SORTING_OPTIONS = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
} as const;

export const Setting = {
  OfferCount: 315,
};

export const CITIES = [
  { city: 'Paris', isActive: false },
  { city: 'Cologne', isActive: false },
  { city: 'Brussels', isActive: false },
  { city: 'Amsterdam', isActive: true },
  { city: 'Hamburg', isActive: false },
  { city: 'Dusseldorf', isActive: false },
];

export const CARD_IMAGE_SIZE = {
  CITIES_WIDTH: 260,
  CITIES_HEIGHT: 200,
  FAVORITES_WIDTH: 150,
  FAVORITES_HEIGHT: 110,
  NEAR_PLACES_WIDTH: 260,
  NEAR_PLACES_HEIGHT: 200,
} as const;

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type CardType = 'cities' | 'favorites' | 'near-places';

export type PlaceCardProps = {
  offer: Offer;
  imageWidth?: number;
  imageHeight?: number;
  cardType?: CardType;
};

import { Offer } from '../components/place-card/place-card.types';

export function getFavoriteOffers(favorites: Offer[]): Offer[] {
  return favorites.filter((favorit) => favorit.isFavorite);
}

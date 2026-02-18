import PlaceCard from '../../components/place-card/place-card';
import LocationItem from '../../components/locations-item/locations-item';
import { CARD_IMAGE_SIZE } from '../../const';

import { Offer } from '../place-card/place-card.types';

export type FavoritesGroupProps = {
  city: string;
  favorits: Offer[];
};

function FavoritesItem({ city, favorits }: FavoritesGroupProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationItem city={city} as="div" />
      </div>
      <div className="favorites__places">
        {favorits.map((favorit) => (
          <PlaceCard
            key={favorit.id}
            offer={favorit}
            imageWidth={CARD_IMAGE_SIZE.FAVORITES_WIDTH}
            imageHeight={CARD_IMAGE_SIZE.FAVORITES_HEIGHT}
            cardType={'favorites'}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesItem;

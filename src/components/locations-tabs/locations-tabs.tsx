import { CITIES } from '../../const';
import LocationItem from '../locations-item/locations-item';

function LocationsTabs() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map(({ city, isActive }) => (
          <LocationItem key={city} city={city} isActive={isActive} />
        ))}
      </ul>
    </section>
  );
}

export default LocationsTabs;

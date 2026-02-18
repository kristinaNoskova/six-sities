import { CITIES } from '../../const';
import LocationItem from '../locations-item/locations-item';

function LocationsTabs() {
  const activeCity = 'Paris';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <LocationItem key={city} city={city} isActive={city === activeCity} />
        ))}
      </ul>
    </section>
  );
}

export default LocationsTabs;

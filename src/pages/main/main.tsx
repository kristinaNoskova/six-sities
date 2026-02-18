import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';
import LocationsTabs from '../../components/locations-tabs/locations-tabs';
import PlacesFound from '../../components/places-found/places-found';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { MOCKS } from '../../mocks/mocks';

type MainProps = {
  offerCount: number;
};

function Main({ offerCount }: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsTabs />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound offerCount={offerCount} />
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {MOCKS.map((offer) => (
                  <PlaceCard key={offer.id} offer={offer} />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

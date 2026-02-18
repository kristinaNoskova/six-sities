import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesItem from '../../components/favorites-item/favorites-item';
import { getFavoriteOffers } from '../../utils/utils';
import { MOCKS } from '../../mocks/mocks';
import { CITIES } from '../../const';

function Favorites(): JSX.Element {
  const favoritesList = getFavoriteOffers(MOCKS);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                const favoriteCities = favoritesList.filter(
                  (favoriteCity) => favoriteCity.city.name === city,
                );

                if (favoriteCities.length === 0) {
                  return null;
                }

                return (
                  <FavoritesItem
                    key={city}
                    city={city}
                    favorits={favoriteCities}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;

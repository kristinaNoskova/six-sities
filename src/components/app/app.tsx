import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';

type OfferRentQuantity = {
  offerCount: number;
};

function App({ offerCount }: OfferRentQuantity): JSX.Element {
  return (
    <>
      <Main offerCount={offerCount}></Main>
      <Favorites />
    </>
  );
}

export default App;

import Main from '../../pages/main/main';

type OfferRentQuantity = {
  offerCount: number;
};

function App({ offerCount }: OfferRentQuantity): JSX.Element {
  return <Main offerCount={offerCount}></Main>;
}

export default App;

type PlacesFoundProps = {
  offerCount: number;
};

function PlacesFound({ offerCount }: PlacesFoundProps) {
  return (
    <b className="places__found">{offerCount} places to stay in Amsterdam</b>
  );
}

export default PlacesFound;

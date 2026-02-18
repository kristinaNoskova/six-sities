import { SORTING_OPTIONS } from '../../const';

function Sorting() {
  const sortingOptions = Object.values(SORTING_OPTIONS);
  const currentOption = SORTING_OPTIONS.POPULAR;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {sortingOptions.map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentOption ? 'places__option--active' : ''}`}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;

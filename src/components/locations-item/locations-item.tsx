type LocationItemProps = {
  city: string;
  isActive: boolean;
  as?: 'li' | 'div';
};

const LocationItem = ({
  city,
  isActive,
  as: Tag = 'li',
}: LocationItemProps) => (
  <Tag className="locations__item">
    {' '}
    <a
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      href="#"
    >
      <span>{city}</span>
    </a>
  </Tag>
);

export default LocationItem;

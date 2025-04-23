import CitySelector from './CitySelector';

export default function CitiesPage() {
  return (
    <div className="cities-page">
      <h1>Cities</h1>
      <p>Select a city to get started:</p>
      <CitySelector />
    </div>
  );
}
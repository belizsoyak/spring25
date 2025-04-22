import React from 'react';

const cities = ['Istanbul', 'Ankara', 'Urfa', 'Cappadocia'];

function CitySelector({ selectedCity, onSelectCity }) {
  return (
    <div>
      <h2>Select a city:</h2>
      <select value={selectedCity} onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">-- Choose a city --</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;


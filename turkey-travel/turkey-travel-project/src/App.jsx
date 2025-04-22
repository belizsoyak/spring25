import './App.css';
import './index.css';
import { useState } from 'react';
import CitySelector from './components/CitySelector';
import Header from './components/Header';
import Hero from './components/Hero';
import CityGrid from './components/CityGrid';
import SocialLinks from './components/SocialLinks';
import CityShowcase from './components/CityShowcase';

function App() {
  const [city, setCity] = useState('');

  return (
    <>
      <SocialLinks />
      <Header />
      <Hero />
      <CityShowcase />
      <CityGrid />

    <div>
      <h1>Turkey Travel Hub</h1>
      <CitySelector selectedCity={city} onSelectCity={setCity} />
      {city && <p>You selected: {city}</p>}
    </div>

    </>
  );
}

export default App;
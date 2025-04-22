import './CityShowcase.css';

const cities = [
  {
    name: 'Urfa',
    description: 'Tales and food.',
    img: '/your-img-folder/urfa.jpg',
  },
  {
    name: 'Istanbul',
    description: 'Cultural capital.',
    img: '/your-img-folder/istanbul.jpg',
  },
  {
    name: 'Cappadocia',
    description: 'Magical.',
    img: '/your-img-folder/cappadocia.jpg',
  },
  // Add more cities here
];

export default function CityShowcase() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cities.concat(cities).map((city, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={city.img} alt={city.name} />
            <p><strong>{city.name}</strong> — {city.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

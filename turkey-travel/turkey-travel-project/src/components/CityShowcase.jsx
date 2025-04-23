import './CityShowcase.css';

const cities = [
    {
      name: 'Istanbul',
      description: 'Cultural capital.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ILFuCBWk7BkQNGicBpDNom82Z6aSTHC_2A&s',
    },
    {
      name: 'Ankara',
      description: 'The capital city.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ankara_asv2021-10_img04_An%C4%B1tkabir.jpg/330px-Ankara_asv2021-10_img04_An%C4%B1tkabir.jpg',
    },
    {
      name: 'Izmir',
      description: 'Aegean beauty.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLl5lKf-EUGKbfsbSVY0Ae-pc7msb-wqZhw&s',
    },
    {
      name: 'Antalya',
      description: 'Summer spot.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuEnuGVyufIOpgEqp6XeM3bcMM8j_e9q2cw&s',
    },
    {
      name: 'Bursa',
      description: 'Green city of history.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN9pY_58ZTBCzUMlt_Ff-abzKNfLXbJr3Og&s',
    },
    {
      name: 'Adana',
      description: 'Kebab haven.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4H0lbvv_h5D4nOxKt3PTwmzq9z6fPwN6MQ&s',
    },
    {
      name: 'Konya',
      description: 'Home of Rumi.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHiqau0pGQ4bhGb-WIwtj7J0oaAkiAJIhIQ&s',
    },
    {
      name: 'Gaziantep',
      description: 'Baklava capital.',
      image: 'https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2022/05/gaziantep-tarihi.webp',
    },
    {
      name: 'Şanlıurfa',
      description: 'Tales and food.',
      image: 'https://t4.ftcdn.net/jpg/05/02/89/89/360_F_502898942_N88a1B6rwTspWjd0ieHXdGrNfEDZFUW7.jpg',
    },
    {
      name: 'Diyarbakır',
      description: 'Historic walls.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HI_afC86nfCRbySD54GoPEocx5NnYZo9CQ&s',
    },
    {
      name: 'Kayseri',
      description: 'Mount Erciyes.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Mount_Erciyes_%28Argaeus%29%2C_Turkey_%2831870998063%29.jpg',
    },
    {
      name: 'Eskişehir',
      description: 'Student city.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Eskisehir_City.jpg',
    },
    {
      name: 'Samsun',
      description: 'Black Sea port.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNTouL5eJFdumQ9BKzpwg3ol9TaBbz3cT1Q&s',
    },
    {
      name: 'Van',
      description: 'Lake and cats.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Akhtamar_Island_on_Lake_Van_with_the_Armenian_Cathedral_of_the_Holy_Cross.jpg',
    },
    {
        name: 'Cappadocia',
        description: 'Magical.',
        image: 'https://www.wanderlustchloe.com/wp-content/uploads/2019/10/Cappadocia-balloons-3.jpg',
    },
    {
      name: 'Erzurum',
      description: 'Winter sports hub.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2pLgp2lembx7zaODESJ_v20nSpJXk0UD_g&s',
    },
    {
      name: 'Sivas',
      description: 'Historical significance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8tIKUUOxlIHSjbtCl48pH1PR9Nvv3xS0mw&s',
    },
    {
      name: 'Balıkesir',
      description: 'Between Marmara and Aegean.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzb61qyeJWEZLHqD0OI1ilg5NrKbk0W4c3Hw&s',
    },
    {
      name: 'Denizli',
      description: 'Home of Pamukkale.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbgfvTEyR_9kd1L22u9TPC2UrUSlWyL1Scw&s',
    },
    {
      name: 'Aydın',
      description: 'Rich in ancient ruins.',
      image: 'https://media.istockphoto.com/id/1304055196/photo/pigeon-island-with-pirate-castle-kusadasi-harbor-aegean-coast-of-turkey.jpg?s=612x612&w=0&k=20&c=H9y8Rzn-exnBkAJW9D2Ub4fMHKozH6RracVJsZ8efw0=',
    },
    {
      name: 'Muğla',
      description: 'Turquoise coast.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDQdda90WkhOdgmk_UFYeWQvwHxaZ6nUSiA&s',
    },
    {
      name: 'Manisa',
      description: 'Industrial center.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IWkccc1n5BjrLU7-XSZANcEGWZ7eVc_A9Q&s',
    },
    {
      name: 'Kahramanmaraş',
      description: 'Famous for ice cream.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAzBFMdAq85SYJX_PLK7Md1LDnLrPXr0HPg&s',
    },
    {
      name: 'Hatay',
      description: 'Multicultural heritage.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTxdAUyVjbJgi7vmWOQ4oMplzgUp_V2RKQQ&s',
    },
    {
      name: 'Kütahya',
      description: 'Ceramics and tiles.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1RJKNFULOVeXS44YGKSf3_2v8_SPCO7Mpw&s',
    },
    {
      name: 'Aksaray',
      description: 'Gateway to Cappadocia.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCgSHgrdWNmwllqmG4QZDHQrOkpkOP0psEg&s',
    },
    {
      name: 'Niğde',
      description: 'Historical landmarks.',
      image: 'https://static.wixstatic.com/media/f11647_0a906ce268da41a787dda0cf436772f5~mv2.jpg/v1/fill/w_568,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f11647_0a906ce268da41a787dda0cf436772f5~mv2.jpg',
    },
    {
      name: 'Karaman',
      description: 'Rich history.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Karaman_castle_4868.jpg',
    },
  ];
  
  

export default function CityShowcase() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cities.concat(cities).map((city, index) => (
          <div className="carousel-item" key={index}>
            <img src={city.image} alt={city.name} className="city-image" />
            <h3><strong>{city.name}</strong> — {city.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
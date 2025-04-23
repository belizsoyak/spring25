import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="navbar">
        <h1 className="logo">Travel Turkey</h1>
        <nav>
          <ul className="nav-links">
            <li>Cities</li>
            <li>Cuisine</li>
            <li>Music</li>
            <li>Saved Destinations</li>
            <li><button className="recommend-btn">Generate Recommendation</button></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
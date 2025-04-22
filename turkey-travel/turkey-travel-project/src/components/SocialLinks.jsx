import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './SocialLinks.css'; // we'll style it separately

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/belizsoyak" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://www.linkedin.com/in/beliz-soyak-2b8195169/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://www.facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    </div>
  );
};

export default SocialLinks;
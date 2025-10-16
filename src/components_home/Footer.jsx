import "../components_home/Footer.css";
import logo from "../assets/logo1.png";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <span>Get connected with us:</span>
        <div className="icons">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-tiktok"></i></a>
          <a href="https://www.instagram.com/cryptoversealbania/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/company/cryptoverse-albania/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://linktr.ee/cryptoverse_albania" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram"></i></a>
           <a href="https://youtube.com/@cryptoverse_albania?si=mcAeweY8Q5o8IZ2M" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h6>About</h6>
          <img src={logo} alt="Cryptoverse Logo" className="footer-logo" />
          <p>Albanians one-stop guide to all things crypto </p>
        </div>
        <div>
          <h6>Products</h6>
          <ul>
            <li><Link to="/research#nft-section">NFT</Link></li>
            <li>Market Consulting</li>
          <li>
              <a 
                href="https://linktr.ee/cryptoverse_albania" 
                target="_blank" 
              >
                Trading Signals (Buy/Sell)
              </a>
            </li>
             <li><Link to="/analysis#market_24h">Market Analysis</Link></li>
            <li>Investment Strategy</li>
          </ul>
        </div>

        <div>
          <h6>Useful Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div>
          <h6>Contact</h6>
          <p><i className="bi bi-geo-alt-fill"></i> Tirana, Albania</p>
          <p><i className="bi bi-envelope-fill"></i> info@cryptoverse.com</p>
          <p><i className="bi bi-telephone-fill"></i> +355 68 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Cryptoverse Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

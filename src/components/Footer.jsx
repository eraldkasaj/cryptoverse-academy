import "../components/Footer.css";
import logo from '../assets/binance_logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Section */}
      <div className="footer-social">
        <span>Get connected with us:</span>
        <div className="icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-github"></i></a>
        </div>
      </div>

      
      <div className="footer-links">
        <div>
          <h6>About</h6>
          <img 
                src={logo}  
                alt="Cryptoverse Logo" 
                className="footer-logo"
            />
          <p>Learn and explore the world of crypto with Binance Academy.</p>
        </div>
        <div>
          <h6>Products</h6>
          <a href="#">Trading</a>
          <a href="#">Academy</a>
          <a href="#">Wallet</a>
          <a href="#">NFT</a>
        </div>
        <div>
          <h6>Useful Links</h6>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
        <div>
          <h6>Contact</h6>
          <p><i className="bi bi-geo-alt-fill"></i> Tirana, Albania</p>
          <p><i className="bi bi-envelope-fill"></i> info@cryptoverse.com</p>
          <p><i className="bi bi-telephone-fill"></i> +355 68 123 4567</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Cryptoverse Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

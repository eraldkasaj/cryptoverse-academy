import "../components_home/Footer.css";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <span>Get connected with us:</span>
        <div className="icons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/cryptoversealbania/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/company/cryptoverse-albania/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
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
            <li>Trading Academy</li>
            <li>Wallet</li>
            <li>NFT</li>
            <li>Këshillime në treg</li>
            <li>Sinjale tregtare (Buy/Sell)</li>
            <li>Analiza e tregut</li>
            <li>Strategji investimi</li>
          </ul>
        </div>

        <div>
          <h6>Useful Links</h6>
          <ul>
            <li><a href="#">Pricing</a></li>
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

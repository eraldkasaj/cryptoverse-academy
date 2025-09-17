import { useEffect, useState } from "react";
import "../components/Crypto_Trading.css";

const Crypto_Trading = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="Crypto_Trading">
      <div className="Crypto_Trading_Title">Crypto Trading</div>

      <div className="Cards_Wrapper">
        {coins.map((coin, index) => (
          <div className="card mt-2 bg-danger" key={index}>
            <img
              src={coin.image}
              className="card-img-top"
              alt={coin.name}
              style={{padding: "20px", height: "200px", objectFit: "contain" }}
            />
            <div className="card-body bg-dark">
              <h5 className="card-title">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h5>
              <p className="card-text">
                Price: ${coin.current_price.toLocaleString()} <br />
                Market Cap: ${coin.market_cap.toLocaleString()}
              </p>
              <a
                href={`https://www.coingecko.com/en/coins/${coin.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Trade Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto_Trading;

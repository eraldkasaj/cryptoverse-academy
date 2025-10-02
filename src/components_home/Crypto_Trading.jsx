import { useEffect, useState } from "react";
import "../components_home/Crypto_Trading.css";

const Crypto_Trading = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const cached = localStorage.getItem("cryptoCoins");
    const cachedTime = localStorage.getItem("cryptoCoinsTime");

    const FOUR_HOURS = 1000 * 60 * 60 * 4; // 4 orë në ms
    const now = new Date().getTime();

    if (cached && cachedTime && now - cachedTime < FOUR_HOURS) {
      // përdor të dhënat e cache
      setCoins(JSON.parse(cached));
    } else {
      const fetchCoins = async () => {
        try {
          const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
          );
          const data = await res.json();
          setCoins(data);

          // ruaj në localStorage bashkë me kohën
          localStorage.setItem("cryptoCoins", JSON.stringify(data));
          localStorage.setItem("cryptoCoinsTime", now.toString());
        } catch (err) {
          console.error("Error fetching coins:", err);
        }
      };

      fetchCoins();
    }
  }, []);

  return (
    <div className="Crypto_Trading">
      <div className="Crypto_Trading_Title">Crypto Trading</div>

      <div className="Cards_Wrapper">
        {coins.map((coin, index) => (
          <div className="card mt-2" key={index}>
            <img
              src={coin.image}
              className="card-img-top"
              alt={coin.name}
              style={{ padding: "20px", height: "200px", objectFit: "contain" }}
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

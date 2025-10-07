import { useEffect, useState } from "react";
import "../components_analysis/Top_Coins.css"

const Top_Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=7d,30d"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchData();
  }, []);

  if (!coins.length) {
    return <div className="card p-3">Loading...</div>;
  }

  return (
    <div className="costum-card p-3 ms-3 me-3 mt-5">
      <h5 className="text-light">Top Cryptocurrencies</h5>
      <table className="custom-table table-hover align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Asset</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>24h</th>
            <th>7d</th>
            <th>30d</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "24px", marginRight: "8px" }}
                />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>${coin.total_volume.toLocaleString()}</td>
              <td style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td style={{ color: coin.price_change_percentage_7d_in_currency > 0 ? "green" : "red" }}>
                {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </td>
              <td style={{ color: coin.price_change_percentage_30d_in_currency > 0 ? "green" : "red" }}>
                {coin.price_change_percentage_30d_in_currency?.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top_Coins;

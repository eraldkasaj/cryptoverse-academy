import { useEffect, useState } from "react";
import '../components_analysis/Bitcoin_Dominance.css'

const BitcoinDominance = () => {
  const [btc, setBtc] = useState(null);
  const [eth, setEth] = useState(null);
  const [others, setOthers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/global");
        const json = await res.json();

        const btcPct = json?.data?.market_cap_percentage?.btc ?? 0;
        const ethPct = json?.data?.market_cap_percentage?.eth ?? 0;
        const othersPct = 100 - btcPct - ethPct;

        setBtc(btcPct.toFixed(1));
        setEth(ethPct.toFixed(1));
        setOthers(othersPct.toFixed(1));
      } catch (err) {
        console.error("fetch data error:", err);
      }
    };
    fetchData();
  }, []);

  if (btc === null || eth === null || others === null) {
    return <div className="card p-3">Loading...</div>;
  }

  return (
    <div className="p-2 bitcoin_dominance">
      <div className="fear-text ps-2 fw-bold">
        Bitcoin Dominance
        <i
          className="bi bi-info-circle ms-2"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Dominanca tregon përqindjen e kapitalizimit të tregut që ka BTC, ETH dhe pjesa tjetër."
        ></i>
      </div>

    <div className="mt-4 fw-bold d-flex justify-content-between text-dark">
  <div className="text-center">
    <span className="dot btc"></span> Bitcoin
    <div className="fs-4">{btc}%</div>
  </div>
  <div className="text-center">
    <span className="dot eth"></span> Ethereum
    <div className="fs-4">{eth}%</div>
  </div>
  <div className="text-center">
    <span className="dot others"></span> Others
    <div className="fs-4">{others}%</div>
  </div>
</div>


      <div className="dominance-bar mt-4">
        <div className="bar btc" style={{ width: `${btc}%` }}></div>
        <div className="bar eth" style={{ width: `${eth}%` }}></div>
        <div className="bar others" style={{ width: `${others}%` }}></div>
      </div>
    </div>
  );
};

export default BitcoinDominance;

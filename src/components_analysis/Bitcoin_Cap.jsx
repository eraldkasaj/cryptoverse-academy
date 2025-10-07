import { useEffect, useState } from "react";
import "../components_analysis/Bitcoin_Cap.css"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Bitcoin_Cap = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [btcStats, setBtcStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=30"
        );
        const json = await res.json();
        const formatted = json.map((d) => ({
          time: d[0],
          close: parseFloat(d[4]),
        }));
        setDataPoints(formatted);
      } catch (err) {
        console.error("fetch data error:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
        const json = await res.json();
        setBtcStats(json);
      } catch (err) {
        console.error("fetch stats error:", err);
      }
    };
    fetchStats();
  }, []);

  if (!dataPoints.length || !btcStats) {
    return <div className="card p-3">Loading...</div>;
  }

  const chartData = {
    labels: dataPoints.map((p) => new Date(p.time).toLocaleDateString("en-GB")),
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: dataPoints.map((p) => p.close),
        borderColor:"#735ee2",
        backgroundColor:"white",
        fill: true,
        tension: 0.2,
      },
    ],
  }

 const options = {
  responsive: true,
  plugins: { 
    legend: { labels: { color: "#f5f5f5" } }   
  },
  scales: {
    x: { ticks: { maxTicksLimit: 6, color: "#ddd" }, grid: { color: "#333" } },
    y: { beginAtZero: false, ticks: { color: "#ddd" }, grid: { color: "#333" } },
  },
};


  return (
    <div className="market-overview">
      <div className="left-section">
        <div className="custom-card">
          <h4>Bitcoin </h4>
          <p className="mt-4 fw-bold">Price: ${parseFloat(btcStats.lastPrice).toLocaleString()}</p>
          <p className="mt-4 fw-bold">Change : 
            <span style={{color: btcStats.priceChangePercent > 0 ? "green" : "red"}}>
              {btcStats.priceChangePercent}%
            </span>
          </p>
        </div>

        <div className="custom-card">
          <h4>BTC High/Low </h4>
          <p className="mt-4 fw-bold"><span className="text-success">High</span>: ${parseFloat(btcStats.highPrice).toLocaleString()}</p>
          <p className="mt-4 fw-bold"><span className="text-danger">Low</span>: ${parseFloat(btcStats.lowPrice).toLocaleString()}</p>
        </div>
      </div>

      <div className="Btc_chart p-3">
        <h5>Bitcoin Market Chart</h5>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Bitcoin_Cap;

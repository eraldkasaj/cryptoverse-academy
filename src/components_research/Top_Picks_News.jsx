import '../components_research/Top_Picks_News.css'
import { useEffect, useState } from "react";

const TopPicksNews = () => {
  const [news, setNews] = useState([]);
useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=us&apikey=YOUR_API_KEY"
      );
      const json = await res.json();
      setNews(json.articles || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };
  fetchNews();
}, []);


  if (!news.length) {
    return <div className="card p-3">Loading top news...</div>;
  }

  return (
    <div className="card p-3 top-picks-news">
      <h4 className="fw-bold mb-3">🔥 Top Picks (News)</h4>
      <ul className="list-group">
        {news.map((item, i) => (
          <li key={i} className="list-group-item">
            <a href={item.url} target="_blank" rel="noreferrer" className="fw-semibold">
              {item.title}
            </a>
            <div className="text-muted small">
              {item.domain} • {new Date(item.published_at).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPicksNews;

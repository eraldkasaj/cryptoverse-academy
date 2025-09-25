import '../components_research/Top_Picks_News.css'
import { useEffect, useState } from "react";

const Top_Picks_News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
          const res = await fetch(
          "https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=el&apikey=92ec6233f20723856be2c46116b84733"  
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
    return <div className="card p-3">Loading news...</div>;
  }

  return (
    <div className="news-container">
      <h3>📰 Top Picks News</h3>
      <div className="news-list">
        {news.map((article, i) => (
          <div key={i} className="news-card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h5>{article.title}</h5>
            </a>
            <p>{article.description}</p>
            <small>
              {article.source?.name} — {new Date(article.publishedAt).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top_Picks_News;

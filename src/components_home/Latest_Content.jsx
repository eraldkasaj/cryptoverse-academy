import { useEffect, useState } from "react";
import "../components_home/Latest_Content.css";

const Latest_Content = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const cached = localStorage.getItem("latestNews");
    const cachedTime = localStorage.getItem("latestNewsTime");

    const FOUR_HOURS = 1000 * 60 * 60 * 4; // 4 orë në ms
    const now = new Date().getTime();

    if (cached && cachedTime && now - cachedTime < FOUR_HOURS) {
      // përdor lajmet nga cache
      setNews(JSON.parse(cached));
    } else {
      const fetchNews = async () => {
        try {
          const res = await fetch(
            "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
          );
          const data = await res.json();
          const sliced = data.Data.slice(0, 3);

          setNews(sliced);

          // ruaj të dhënat dhe kohën
          localStorage.setItem("latestNews", JSON.stringify(sliced));
          localStorage.setItem("latestNewsTime", now.toString());
        } catch (err) {
          console.error("Error fetching news:", err);
        }
      };

      fetchNews();
    }
  }, []);

  return (
    <div className="Latest_Content">
      <div className="Content_Title">Latest Content</div>

      <div className="Cards_Wrapper">
        {news.map((item, index) => (
          <div key={index} className="card mt-2">
            <img
              src={item.imageurl}
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body bg-dark">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body.slice(0, 100)}...</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Content;

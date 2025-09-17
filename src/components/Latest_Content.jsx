import { useEffect, useState } from "react";
import "../components/Latest_Content.css";

const Latest_Content = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );
        const data = await res.json();
        setNews(data.Data.slice(0, 3));
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
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
              <p className="card-text">
                {item.body.slice(0, 100)}...
              </p>
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

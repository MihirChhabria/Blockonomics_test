import React, { useEffect, useState } from 'react';

function Utils({ newsId }) {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
    })
      .catch(error => console.error('Error fetching news: ', error));
  }, [newsId]);

  return (
    <div className="card glassmorphism-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
            <h2>{news.title}</h2>
            <p>Author: {news.by}</p>
            <p>Score: {news.score}</p>
            <p>Time: {new Date(news.time * 1000).toLocaleString()}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
        </>
      )}
    </div>
  );
}

export default Utils;

import React, { useEffect, useState } from 'react';

function Utils({ newsId }) {
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news: ', error));
  }, [newsId]);

  return (
    <li>
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        {news.title}
      </a>
    </li>
  );
}

export default Utils;

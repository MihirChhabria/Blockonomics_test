import React, { useEffect, useState } from 'react';
import Utils from './Utils';

function SummaryCard() {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => response.json())
      .then(data => {
        const top10Stories = data.slice(0, 10);
        setTopStories(top10Stories);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="card-container">
      <h1 className="card-heading">Hacker News Top 10 Stories</h1>
      <div className="card-scroll-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          topStories.map(newsId => (
            <Utils key={newsId} newsId={newsId} />
          ))
        )}
      </div>
    </div>
  );
}

export default SummaryCard;

import React, { useEffect, useState } from 'react';
import NewsGridItem from './NewsGridItem';
import './App.css'; // Import the CSS file if not already imported

function NewsBody() {
  const [newsCategories, setNewsCategories] = useState([]);
  const [newsByCategory, setNewsByCategory] = useState({});

  useEffect(() => {
    fetch(`${window.configs.apiUrl}/categories`)
      .then(response => response.json())
      .then(data => {
        setNewsCategories(data);
        return data;
      })
      .then(categories => {
        categories.forEach(category => {
          fetch(`${window.configs.apiUrl}/newsByCategory/${category.id}?limit=2`)
            .then(response => response.json())
            .then(newsData => {
              setNewsByCategory(prevNews => ({
                ...prevNews,
                [category.id]: newsData
              }));
            });
        });
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="news-grid-container">
      {newsCategories.map((category) => {
        const newsItems = newsByCategory[category.id];
        return newsItems && newsItems.length > 0 ? (
          <NewsGridItem key={category.id} categoryId={category.id} newsData={newsItems} image={category.image_url} />
        ) : null;
      })}
    </div>
  );
}

export default NewsBody;
import styles from './NewsGridItem.module.css'; // Update the path to your CSS file
import React, { useEffect, useState } from 'react';

const NewsGridItem = ({ categoryId, image ,newsData}) => {

  
  return (
    <div className={styles.newsGrid}>
      {/* Column 1 */}
      <div>
        <div className={styles.adBanner} style={{ backgroundImage: `url(${image})` }}></div>
        {newsData.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsDescription}>{item.news}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.newsLink}>Read full story</a>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default NewsGridItem;
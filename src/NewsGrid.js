import styles from './NewsGrid.module.css'; // Update the path to your CSS file

const NewsGrid = () => {
    return (
        <div className={styles.newsGrid}>
          {/* Column 1 */}
          <div>
            <div className={styles.adBanner}>360 x 240</div>
            <div className={styles.newsContent}>
              Sushant Death Probe LIVE Updates: Rhea's parents summoned; Mumbai-Delhi CBI teams huddle
            </div>
            <div className={styles.newsItem}>120 x 80</div>
            <div className={styles.newsItem}>120 x 80</div>
            <div className={styles.newsItem}>120 x 80</div>
          </div>
          
          {/* Column 2 */}
          <div>
            <div className={styles.mainNews}>447 x 285</div>
            <div className={styles.newsContent}>
              In Sushant case, Rhea Chakraborty's parents summoned
            </div>
            <div className={styles.newsItem}>147 x 80</div>
            <div className={styles.newsItem}>147 x 80</div>
            <div className={styles.newsItem}>147 x 80</div>
          </div>
        </div>
      );
};

export default NewsGrid;
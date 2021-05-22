import styles from '../styles/Content.module.css';

/**
 * @file This file will contain all necessary UI+Implementation 
 * for the main content of the web-app
 * @module Content
 */

/**
 * Content of the web-app
 * @returns Content object
 * @author Josh Dreben
 * @name Content
 * @function
 */
/* DELETE LINE BELOW WHEN YEAR, WEEK, AND QUARTER ARE ALL BEING USED */
// eslint-disable-next-line no-unused-vars
export default function Content({ changePage, year, week, quarter }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button className={styles.backbtn} type="button" onClick={() => changePage()}>
          Go Back
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.index} />
      </div>
    </div>
  );
}

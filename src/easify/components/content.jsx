import styles from '../styles/Content.module.css';

/**
 * This file will contain all necessary UI+Implementation
 * For the main content of the web-app
 * @returns Content Object
 */
export default function Content({ changePage }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {/** TEMP BACK BTN FOR EASE OF USE */}
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

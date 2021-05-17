import styles from '../styles/YearCard.module.css';

/**
 * This file contains all necessary UI+Implementation
 * For the year cards shown in the dashboard
 * @param data year data
 * @param index year number
 */
export default function YearCard({ data, index, onClick }) {
  return (
    <button type="button" onClick={() => onClick()} className={styles.card}>
      <p>{`Year ${index}`}</p>
      <h1>{`${data.year}-${data.year + 1}`}</h1>
    </button>
  );
}

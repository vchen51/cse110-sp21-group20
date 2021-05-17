import styles from '../styles/Dash.module.css';
import YearCard from './year-card';

/**
 * This file will contain all necessary UI+Implementation
 * For the user's dashboard
 * @returns Dash Object
 */
export default function Dash({ data, changePage }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header} />
      <div className={styles.welcome}>
        {/** Order of HTML reversed to accomodate
         * flex-column-reverse property */}
        <h2>Click on a year to get started!</h2>
        <h1>Welcome</h1>
      </div>
      <div className={styles.main}>
        {data.map((year) => (
          <YearCard
            key={year.id}
            data={year}
            index={data.indexOf(year) + 1}
            onClick={() => changePage()}
          />
        ))}
      </div>
    </div>
  );
}

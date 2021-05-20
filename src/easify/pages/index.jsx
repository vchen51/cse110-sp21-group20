/** GET RID OF LINE BELOW WHEN DATA IS REAL */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from '../styles/Main.module.css';
import models from '../models/models';
import Dash from '../components/dash';
import Content from '../components/content';

/**
 * This file will contain the necessarry UI+Implementation
 * For the index page of the web-app, either showing the
 * dashboard or main year/quarter/week content page
 * @returns Index Page Object
 */
export default function Main() {
  /** FAKE DATA FOR DEBUG PURPOSES */
  const fakeData = [models.year];

  const [showContent, setShowContent] = useState(false);

  const [currYear, setCurrYear] = useState(0);
  const [currQuarter, setCurrQuarter] = useState('q1');
  const [currWeek, setCurrWeek] = useState('w1');

  return (
    <div className={styles.container}>
      {showContent
        ? (
          <Content
            data={fakeData}
            year={{ val: currYear, set: setCurrYear }}
            quarter={{ val: currQuarter, set: setCurrQuarter }}
            week={{ val: currWeek, set: setCurrWeek }}
            changePage={() => setShowContent(false)}
          />
        )
        : (
          <Dash
            data={fakeData}
            changePage={() => setShowContent(true)}
          />
        )}
    </div>
  );
}

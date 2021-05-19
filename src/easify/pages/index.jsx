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

  return (
    <div className={styles.container}>
      {showContent
        ? <Content data={fakeData} changePage={() => setShowContent(false)} />
        : <Dash data={fakeData} changePage={() => setShowContent(true)} /> }
    </div>
  );
}

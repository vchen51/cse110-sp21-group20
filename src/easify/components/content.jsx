/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import styles from '../styles/Content.module.css';
<<<<<<< HEAD
import EntryCard from './entry-card';
=======
>>>>>>> becd28a45a88bc5274f35f019fbf33bab6e24233
import Image from 'next/image'

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
export default function Content({
  entries,
  data,
  changePage,
  year,
  week,
  quarter,
}) {
  return (
    <div className={styles.wrap}>
      {/** HEADER: YEAR, SETTINGS, PROFILE, QUARTERS, PREVIOUS */}
      <div className={styles.topheader}> 
        {/*<p className={styles.yearelement}>  INSERT YEAR FROM YEAR CARD HERE </p>*/}
        <button className={styles.settingsbtn}><span><Image src={'/../public/Gear.png'} alt="gear" width={14} height={14}/> Settings</span> </button>
        <button id={styles.profilepic} className={styles.profilebtn}><Image src={'/../public/Profile.png'} alt="profile picture"  width={40} height={40}/></button>
      </div> 

      <div className={styles.header}>
<<<<<<< HEAD
        <button
          className={styles.backbtn}
          type="button"
          onClick={() => changePage()}
        >
=======

        {/** TEMP BACK BTN FOR EASE OF USE */}
        <button className={styles.backbtn} type="button" onClick={() => changePage()}>
>>>>>>> becd28a45a88bc5274f35f019fbf33bab6e24233
          Go Back
        </button>

        {/** QUARTER HEADERS */}
        <div className={styles.quarterheader}> 
          {/**
           * TO DO
           * - figure out where buttons lead to
           * - ui of the overall header
           */}
          <button className={styles.qtrbtn} type="button">
            Fall
          </button>
          <button className={styles.qtrbtn} type="button">
            Winter
          </button>
          <button className={styles.qtrbtn} type="button">
            Spring
          </button>
          <button className={styles.qtrbtn} type="button">
            Summer
          </button>
          <button className={styles.qtrbtn} type="button">
            Notes
          </button> 
        </div>
        <div className="line"></div> {/* wanted a dotted line at the bottom of the header */}
      </div>
      
      <div className={styles.main}>
<<<<<<< HEAD
        <div className={styles.index} />
        <div className={styles.entrieswrap}>
          {entries.val.map((entry) => (
            <EntryCard key={entry.id} entries={entries} entry={entry} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => entries.set([
            { id: Date.now(), rows: [], title: new Date().toDateString() },
            ...entries.val,
          ])}
          className={styles.addbtn}
        >
          Create New Entry
        </button>
=======
        
      <div className={styles.index} />
>>>>>>> becd28a45a88bc5274f35f019fbf33bab6e24233
      </div>
    </div>
  );
}
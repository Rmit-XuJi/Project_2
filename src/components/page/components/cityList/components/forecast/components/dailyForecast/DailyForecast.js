import React from 'react';
import styles from './DailyForecast.module.css';

const DailyForecast = ({
    day,
    dailyForecast,
}) => {
    return (
        <div className={styles.DailyForecast}>
            <label>{day}</label>
            <div>{dailyForecast.type}</div>
            <div>{dailyForecast.degree}</div>
        </div>
    )
}

export default DailyForecast;
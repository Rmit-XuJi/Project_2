import React from 'react';
import styles from './Weather.module.css';

const Weather = () => {
    return (
        <div className={styles.weather}>
            <div className={styles.degree}>12.8? </div>
            <span>Clouds?</span>

            <div className={styles.humidityWind}>
                <div className={styles.humidity}>
                    <div>HUMIDITY</div>
                    <div>62.8%?</div>
                </div>
                <div className={styles.wind}>
                    <div>WIND</div>
                    <div>8.7K/M?</div>
                </div>
            </div>
        </div>
    )
}

export default Weather;
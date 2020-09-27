import React from 'react';
import styles from './Forecast.module.css';
import DailyForecast from './components/dailyForecast';

const Forecast = ({
    activeCity,
    forecast,
}) => {
    return (
        <div className={styles.Forecast}>
            <h3>Forecast</h3>
            <div className={styles.WeekForecast}>
                <DailyForecast 
                    day='MON' 
                    dailyForecast={forecast.Monday}
                />
                <DailyForecast 
                    day='TUE' 
                    dailyForecast={forecast.Tuesday}
                />
                <DailyForecast 
                    day='WED' 
                    dailyForecast={forecast.Wednesday}
                />
                <DailyForecast 
                    day='THU' 
                    dailyForecast={forecast.Thursday}
                />
                <DailyForecast 
                    day='FRI' 
                    dailyForecast={forecast.Friday}
                />
            </div>
        </div>
    )
}

export default Forecast;
import React from 'react';
import styles from './CityList.module.css';
import OtherCities from './components/otherCities';
import Forecast from './components/forecast';

const CityList = ({
    activeCity,
    onCityClick,
    forecast,
    weatherToday,
}) => {
    return(
        <div className={styles.details}>
            <OtherCities 
                activeCity={activeCity} 
                onCityClick={onCityClick}
                weatherToday={weatherToday}
            />
            <Forecast 
                activeCity={activeCity}
                forecast={forecast}
            />
        </div>
    )
}

export default CityList;
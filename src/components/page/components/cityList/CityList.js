import React from 'react';
import styles from './CityList.module.css';
import OtherCities from './components/otherCities';
import Forecast from './components/forecast';

const CityList = ({
    activeCity,
    cities,
    onCityClick,
    forecast,
}) => {
    return(
        <div className={styles.details}>
            <OtherCities 
                activeCity={activeCity} 
                cities={cities}
                onCityClick={onCityClick}
            />
            <Forecast 
                activeCity={activeCity}
                forecast={forecast}
            />
        </div>
    )
}

export default CityList;
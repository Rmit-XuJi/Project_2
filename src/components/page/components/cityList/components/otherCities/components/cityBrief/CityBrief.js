import React from 'react';
import styles from './CityBrief.module.css';

const CityBrief = ({
    cityName,
    onCityClick,
    weatherToday,
}) => {
    return (
        <div>
            <button 
                className={styles.cityLink}
                onClick={onCityClick}
            >    {cityName} 
                 <span>{weatherToday.degree}</span> 
                 <span>{weatherToday.type}</span>
            </button>
        </div>
    )
}

export default CityBrief;
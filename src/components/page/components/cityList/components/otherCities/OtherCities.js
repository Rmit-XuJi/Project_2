import React from 'react';
import styles from './OtherCities.module.css';
import CityBrief from "./components/cityBrief";

const OtherCities = ({
    activeCity,
    onCityClick,
    weatherToday,
}) => {
    const Melbourne = 'Melbourne';
    const Sydney = 'Sydney';
    const Brisbane = 'Brisbane';
    const Perth = 'Perth';
    return (
        <div className={styles.OtherCities}>
            <h3>Other Cities</h3>
            {activeCity === Melbourne || <CityBrief 
                                             cityName = {Melbourne} 
                                             onCityClick={onCityClick(Melbourne)} 
                                             weatherToday={weatherToday.Melbourne}
                                        />}
            {activeCity === Sydney || <CityBrief 
                                          cityName = {Sydney} 
                                          onCityClick={onCityClick(Sydney)} 
                                          weatherToday={weatherToday.Sydney}
                                     />}
            {activeCity === Brisbane || <CityBrief 
                                            cityName = {Brisbane} 
                                            onCityClick={onCityClick(Brisbane)} 
                                            weatherToday={weatherToday.Brisbane}
                                        />}
            {activeCity === Perth || <CityBrief 
                                         cityName = {Perth} 
                                         onCityClick={onCityClick(Perth)} 
                                         weatherToday={weatherToday.Perth}
                                     />}
        </div>
    )
}
export default OtherCities;
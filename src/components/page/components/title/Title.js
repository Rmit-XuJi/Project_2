import React from 'react';
import styles from './Title.module.css';
import City from './components/city';
import Weather from './components/weather';

const Title = ({
    activeCity,
    weatherDetail,
}) => {
    return (
        <div className={styles.title}>
            <Weather 
                activeCity={activeCity} 
                weatherDetail={weatherDetail}
            />
            <City activeCity={activeCity} />
        </div>
    )
}

export default Title;
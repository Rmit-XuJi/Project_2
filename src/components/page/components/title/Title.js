import React from 'react';
import styles from './Title.module.css';
import City from './components/city';
import Weather from './components/weather';

const Title = () => {
    return (
        <div className={styles.title}>
            <Weather />
            <City />
        </div>
    )
}

export default Title;
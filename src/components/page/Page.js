import React from 'react';
import styles from './Page.module.css';
import Title from './components/title';
import Details from './components/details';

const Page = () => {
    return (
        <div className = {styles.weatherPage} >
            <Title />
            <Details />
        </div>
    );
}

export default Page;
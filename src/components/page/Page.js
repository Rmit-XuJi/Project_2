import React from 'react';
import styles from './Page.module.css';
import Title from './components/title';
import CityList from './components/cityList';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeCity : 'Melbourne'
        };
        
        this.handOnCityClick = this.handOnCityClick.bind(this);
    }

    handOnCityClick(city){
        return ((event) => {
            event.preventDefault();
            this.setState({
                activeCity: city
            })
        })
    }


    render() {
        const {activeCity} = this.state;
        const weatherDetail = {
            degree: 12.8,
            type: 'Clouds',
            wind: '8.7K/M',
            humidity: '62.8%',
        };
        const forecast = {
            Monday:{
                degree: 9,
                type: 'Clouds',
            },
            Tuesday:{
                degree: 9,
                type: 'Clouds',
            },
            Wednesday:{
                degree: 9,
                type: 'Clouds',
            },
            Thursday:{
                degree: 9,
                type: 'Clouds',
            },
            Friday:{
                degree: 9,
                type: 'Clouds',
            }
        };
        const weatherToday = {
            Melbourne: {
                degree: 12.8,
                type: 'Clouds',
            },
            Sydney: {
                degree: 12.8,
                type: 'Clouds',
            },
            Brisbane: {
                degree: 12.8,
                type: 'Clouds',
            },
            Perth: {
                degree: 12.8,
                type: 'Clouds',
            }
        };

        return (
            <div className = {styles.weatherPage} >
                <Title 
                    activeCity={activeCity}
                    weatherDetail={weatherDetail}
                />
                <CityList 
                    activeCity={activeCity}
                    weatherToday={weatherToday}
                    forecast={forecast}
                    onCityClick={this.handOnCityClick}
                />
            </div>
        )
    }
}

// const Page = () => {
//     return (
//         <div className = {styles.weatherPage} >
//             <Title />
//             <CityList />
//         </div>
//     );
// }

export default Page;
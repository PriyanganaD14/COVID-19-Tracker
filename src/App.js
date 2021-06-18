import React from 'react';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api/index';

class App extends React.Component {

    state = {
        data : {},
    }
 
 async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }

    render() {

        const {data1}=this.setState
        return (
            <div className={styles.container}>
                <Cards data={data1} />
                <Chart />
                <CountryPicker />
            </div>
        );
    }

}

export default App;
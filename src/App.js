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
       // console.log(data);
    }

    render() {

        const {data}=this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>     
                <Chart />
                <CountryPicker />
            </div>
        );
    }

}

export default App;
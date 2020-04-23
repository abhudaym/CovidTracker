import React from 'react';
import Cards from './World/components/Cards/Cards';
import Charts from './World/components/Charts/Charts';
import CountryPicker from './World/components/CountryPicker/CountryPicker';
import Footer from './World/components/Footer/Footer';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/covid.png';


class World extends React.Component {

  state = {
    data: {},
    country: '',
  }


  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render(){
    const { data , country } = this.state;

    return (
      <div className={styles.container}>
        <img src={covidImage} className={styles.image} alt="Covid19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default World;

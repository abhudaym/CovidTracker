import React from 'react';
import Cards from './World/components/Cards/Cards';
import Charts from './World/components/Charts/Charts';
import CountryPicker from './World/components/CountryPicker/CountryPicker';
import Footer from './World/components/Footer/Footer';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/covid.png';
import Lottie from 'react-lottie';
import animationData from './images/18168-stay-safe-stay-home.json';


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
    const defaultOptions = {
      loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
  
    const { data , country } = this.state;

    return (
      <div className={styles.container}>
        <span className={covidImage}><Lottie options={defaultOptions} width={200} height={200} /></span> 
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default World;

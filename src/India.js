import React from "react";
import StatePicker from "./India/components/StatePicker/StatePicker";
import Footer from "./World/components/Footer/Footer";
import covidImage from './images/covid.png';
import styles from './App.module.css';
import Lottie from 'react-lottie';
import animationData from './images/18168-stay-safe-stay-home.json';
class India extends React.Component {

  
  render() {
    const defaultOptions = {
      loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
  
    return (
      <div className={styles.container}>
        {/* <img src={covidImage} className={styles.image} alt="Covid19"/> */}
        <span className={covidImage}><Lottie options={defaultOptions} width={200} height={200} /><h2 style={{textAlign:'center'}} className='h2'>COVID-19 TRACKER</h2></span> 
        <StatePicker />
        <Footer />
      </div>
    );
  }
}

export default India;

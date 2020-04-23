import React from "react";
import StatePicker from "./India/components/StatePicker/StatePicker";
import Footer from "./World/components/Footer/Footer";
import covidImage from './images/covid.png';
import styles from './App.module.css';

class India extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={covidImage} className={styles.image} alt="Covid19"/>
        <StatePicker />
        <Footer />
      </div>
    );
  }
}

export default India;

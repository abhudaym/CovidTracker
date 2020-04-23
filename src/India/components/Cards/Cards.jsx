import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";


const useStats = () => {
  const [results, setResults] = useState(" ");
  const url = "https://api.covid19india.org/data.json";
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(url);
      setResults(data.data.statewise);
    }
    fetchData();
  }, []);
  return results;
};

const Cards = ({ state }) => {
  const url = "https://api.covid19india.org/data.json";
  const [results, setResults] = useState(" ");
  // const fetchData = async() => {
  //     try {
  //         const res = await axios.get(url);
  //         setResults(res.data.statewise);
  //         console.log(res.data.statewise);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     fetchData();
  // }, [])

  const stats = useStats();
  var confirmed = "";
  var recovered = "";
  var deaths = "";
  var time = "";
  Object.keys(stats).forEach(element => {
      if(state === stats[element].state){
          confirmed = stats[element].confirmed;
          recovered = stats[element].recovered;
          deaths = stats[element].deaths;
          time = stats[element].lastupdatedtime;
      }
  });
//   var i=0;
//   for( i=0 ; i<38 ; i++ ){
//       if(state = stats[37].confirmed)
//       {
//           console.log("EQUAL!");
//       }
//   }

  // console.log(stats);
  return (
    // <div>
    //   <h1>Confirmed: {confirmed}</h1>
    //   <h1>Recovered: {recovered}</h1>
    //   <h1>Deaths: {deaths}</h1>
    // </div>
    /////////

    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {confirmed}
            </Typography>
            <Typography color="textSecondary">
              {time}
            </Typography>
            <Typography variant="body2">
              Number of confirmed cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{recovered}</Typography>
            <Typography color="textSecondary">
              {time}
            </Typography>
            <Typography variant="body2">
              Number of recovered cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{deaths}</Typography>
            <Typography color="textSecondary">
              {time}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      </div>
    ////////

  );
};
export default Cards;

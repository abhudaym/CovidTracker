import React , { useEffect , useState } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import styles from './Charts.module.css';

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

const Charts = ({ state }) => {
    const stats = useStats();
    var recovered = "";
    var confirmed = "";
    var deaths = "";
    var active = "";

    if(!state){
        state="Total";
    }

    Object.keys(stats).forEach(element => {
        if(state === stats[element].state){
            confirmed = stats[element].confirmed;
            recovered = stats[element].recovered;
            deaths = stats[element].deaths;
            active = stats[element].active;
        }
    });

    console.log(confirmed);


    // const labels = ['active', 'recovered', 'deaths'];
    // const datasets = [active , recovered , deaths];



    return(
        <div className = {styles.chart}>
        <Pie
        data={{
            labels: ['Active','Recovered','Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor : [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                data: [active, recovered,deaths]
            }]
            }}
            options = {{
                legend: {display: true},
                title: {display :true, text: `Current State in ${state==="Total"?"India":state}`},
            }}
        />
        </div>
    )
}

export default Charts;

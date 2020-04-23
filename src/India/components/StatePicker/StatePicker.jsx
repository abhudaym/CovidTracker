import React,{useState,useEffect} from 'react';
import Cards from '../Cards/Cards';
import Charts from '../Charts/Charts';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from "./StatePicker.module.css"

import axios from 'axios';

const useStats = () => {
    const [results,setResults] = useState(" ");
    const url = 'https://api.covid19india.org/data.json';
    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(url);
            setResults(data.data.statewise);
        }
        fetchData();
    },[])
    return results;
}


const StatePicker = () => {
    const [selectedState,setSelectedState] = useState('Total');
    const states = useStats();

    if(!states) return <p>Loading...</p>
        return(
        <div>
            <Cards state={selectedState} />
            {/* <select onChange={(e) => {setSelectedState(e.target.value)}}>
            {console.log(selectedState)}
            {Object.entries(states).map((
            [state , statecode],index) =>
            {
                return(
                <option selected={selectedState === statecode.state} key={statecode.state} value={statecode.state}>
                    {statecode.state}
                </option>);

            })}

            </select> */}

        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue = "" onChange = {(event) => setSelectedState(event.target.value)}>
            {Object.entries(states).map((
            [state , statecode],index) =>
            {
                return(
                <option key={statecode.state} value={statecode.state}>
                    {state === "Total" ? "India" : statecode.state}
                </option>);

            })}
             </NativeSelect>
         </FormControl>
            <Charts state={selectedState} />
        </div>
    )
}

export default StatePicker;

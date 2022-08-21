import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading";
import styles from './weatherApp.module.css'

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        loadInfo();
    },[]);

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ''}`
    },[weather]);

    async function loadInfo (city = "madrid") {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`);

            const jsonRes = await request.json();
            setWeather(jsonRes)
           

        } catch (error) {
            console.log(error);
        }
    }
  

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
    <div className={styles.weatherContainer}>
       <WeatherForm onChangeCity={handleChangeCity} />
        {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        
    </div>
    )
}
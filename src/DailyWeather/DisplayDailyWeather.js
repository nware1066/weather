import React from 'react';
import './DailyWeather.css';

  function DisplayDailyWeather(props) {
    console.log(props.weather.main)
    if (props.weather.name) {
      return (
        <article className='DisplayDailyWeather'>
        <h1>City: {props.weather.name}</h1>
        <p>High Temp: {props.weather.temp}</p>
        <p>Low Temp: {props.weather.temp_min}</p>
        <p>Skies: {props.weather.description}</p>
        <p>windspeed: {props.weather.speed}</p>
        <p>Chance of Rain: {props.pop}</p>
        <p>Humidity: {props.weather.humidity}</p>
        </article>
      )
    } else {
      return ''
    }
}


export default DisplayDailyWeather;

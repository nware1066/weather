import React from 'react';
import './DailyWeather.css';

  function DisplayDailyWeather(props) {

    if (props.weather.name) {
      return (
        <article className='DisplayDailyWeather'>
        <h1>City: {props.weather.name}</h1>
        <p>Temp: {props.weather.main.temp}</p>
        <p>Skies: {props.weather.weather.[0].description}</p>
        </article>
      )
    } else {
      return ''
    }
}


export default DisplayDailyWeather;

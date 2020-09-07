import React from 'react';
import './DailyWeather.css';

function DailyWeather(props) {
  return (
    <article className='DailyWeather'>
      <h1>Date: {props.list.dt}</h1>
      <p>High Temp: {props.list.main.temp_max}</p>
      <p>Low Temp: {props.list.main.temp_min}</p>
      <p>Skies: {props.list.clouds.all}</p>
      <p>windspeed: {props.list.wind.speed}</p>
      <p>Chance of Rain: {props.list.pop}</p>
      <p>Humidity: {props.list.main.humidity}</p>
    </article>
  )
}



export default DailyWeather;

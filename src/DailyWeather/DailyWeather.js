import React from 'react';
import './DailyWeather.css';

function DailyWeather(props) {
  return (
    <article className='DailyWeather'>
      <h1>Date</h1>
      <p>Temp</p>
      <p>Skies</p>
      <p>windspeed</p>
      <p>Chance of Rain</p>
      <p>Humidity</p>
    </article>
  )
}



export default DailyWeather;

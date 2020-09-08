import React from 'react';

function AllWeather(props) {
  if (props.forcast.name) {
    props.forcast.map(forcast => {
      return (
        <article className='forcast'>
        <h1>Temp: {props.forcast.main.temp}</h1>
        <p>High Temp: {props.forcast.main.temp_max}</p>
        <p>Low Temp: {props.forcast.main.temp_min}</p>
        <p>Skies: {props.forcast.weather.[0].description}</p>
        <p>windspeed: {props.forcast.wind.speed}</p>
        <p>Humidity: {props.forcast.main.humidity}</p>
        </article>
      )
    })
  } else {
    return ''
  }
}

export default AllWeather;

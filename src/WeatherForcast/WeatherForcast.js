import React from 'react';

function WeatherForcast(props) {

  if (props.forcast.city) {
    return props.forcast.list.map(forcast => {
      console.log(forcast);
      return (
        <article className='forcast'>
        <h1>Temp: {forcast.main.temp}</h1>
        <p>High Temp: {forcast.main.temp_max}</p>
        <p>Low Temp: {forcast.main.temp_min}</p>
        <p>Skies: {forcast.weather.[0].description}</p>
        <p>windspeed: {forcast.wind.speed}</p>
        <p>Humidity: {forcast.main.humidity}</p>
        </article>
      )
    })
  } else {
    return ''
  }
}

export default WeatherForcast;

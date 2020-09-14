import React, { Component } from 'react';
import DisplayDailyWeather from '../DailyWeather/DisplayDailyWeather';
import WeatherForcast from '../WeatherForcast/WeatherForcast';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      weatherForcast: []
    }
  }

  updateWeather = (weather) => {
    this.setState({ currentWeather: weather })
    console.log(this.state.currentWeather)
  }

  updateForcast = (forcast) => {
    this.setState({ weatherForcast: forcast})
    console.log(this.state.weatherForcast)
  }

  render() {
    return (
      <main className='App'>
        <h1>Hello</h1>
        <Form updateWeather={this.updateWeather }  updateForcast={this.updateForcast} />
        <DisplayDailyWeather weather={this.state.currentWeather} />
        <WeatherForcast forcast={this.state.weatherForcast} />

      </main>

    )
  }
}


export default App;

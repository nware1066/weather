import React, { Component } from 'react';
import DisplayDailyWeather from '../DailyWeather/DisplayDailyWeather';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {}
    }
  }

  updateWeather = (weather) => {
    this.setState({ currentWeather: weather })
  }

  render() {
    console.log(this.state.currentWeather)
    return (
      <main className='App'>
        <h1>Hello</h1>
        <Form updateWeather={this.updateWeather} />
        <DisplayDailyWeather weather={this.state.currentWeather} />
      </main>

    )
  }
}


export default App;

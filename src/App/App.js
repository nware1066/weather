import React, { Component } from 'react';

import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weather: {}
    }
  }

  updateWeather = (weather) => {
    this.setState({ weather: weather })
  }

  render() {
    console.log(this.state.weather)
    return (
      <main className='App'>
        <h1>Hello</h1>
        <Form updateWeather={this.updateWeather} />
      </main>

    )
  }
}


export default App;

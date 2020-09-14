import React, { Component } from 'react';
import { fetchCurrentWeather, fetchWeatherForcast} from '../ApiCalls/ApiCalls'
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  handleInputChange = event => {
    this.setState({ city: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.submitCurrentWeather();
    this.submitWeatherForcast();
  }

  submitCurrentWeather = () => {
    const promise = fetchCurrentWeather(this.state.city);
    promise.then(weather => this.props.updateWeather(weather))
  }

  submitWeatherForcast = () => {
    const promise = fetchWeatherForcast(this.state.city);
    promise.then(forcast => this.props.updateForcast(forcast))
  }

  // refactor to DRY code for submit functions

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='City'
          name='city'
          value={this.state.city}
          onChange={event => this.handleInputChange(event)}
        />

        <button className='submit-button' onClick={ event => this.handleSubmit(event)}>SUBMIT</button>
      </form>
    )
  }
}


export default Form

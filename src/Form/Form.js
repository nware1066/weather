import React, { Component } from 'react';
import { fetchCurrentWeather } from '../ApiCalls/ApiCalls'
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
    const promise = fetchCurrentWeather(this.state.city);
    promise.then(weather => this.props.updateWeather(weather))
    // promise.then(weather => props.updateWeather(weather));
  }

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

import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  handleChange = event => {
    this.setState({ city: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='City'
          name='city'
          value={this.state.city}
          onChange={event => this.handleChange(event)}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}


export default Form

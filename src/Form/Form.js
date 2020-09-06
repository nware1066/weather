import React, { Component } from 'react';
import './Form.css';

class form extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='City'
          name='city'
          value='{this.state.city}'
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}


export default Form;

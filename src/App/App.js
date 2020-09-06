import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        weather: []

    }
  }

    render() {
      return (
        <main className='App'>
          <h1>Hello</h1>
          <Form />
        </main>

      )
    }
}


export default App;

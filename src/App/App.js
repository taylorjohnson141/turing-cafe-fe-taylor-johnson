import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations'
import ReservationForm from '../ReservationForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationForm/>
        <Reservations/>
        </div>
    )
  }
}

export default App;

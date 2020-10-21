import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations'
import ReservationForm from '../ReservationForm'
class App extends Component {
  constructor(){
    super()
    this.state ={
      reservations:[]
    }
  }
  addReservation = (reservation) =>{
    console.log(reservation)
    console.log(this)
    this.setState({reservations:reservation})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationForm addReservation ={this.addReservation}/>
        <Reservations reservations ={this.state.reservations}/>
        </div>
    )
  }
}

export default App;

import React, { Component } from 'react';

class ReservationForm extends Component{
  constructor(){
    super()
  
  this.state = {

  }
}
render(){
  return (
    <form >
      <label for="Name">
      <input type="text"/>
      </label>
      <label for="date">
        <input type="text"/>
      </label>
      <label for="time">
      <input type="text"/>
      </label>
      <label for="numberOfGuests">
        <input type="text"/>
      </label>
      <input type="submit" value="Make Reservation" onSubmit = {} />
    </form>
  )
}
}
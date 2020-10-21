import React, { Component } from 'react';

class ReservationForm extends Component{
  constructor(){
    super()
  
  this.state = {
    name : '',
    date :'',
    time :'',
    numberOfGuests :''
  }
 
}
handleChange = (event) =>{
  this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit = (event) =>{
    
  }

render(){
  return (
    <form className = 'form'>
      <label for="Name" value = 'Name'>
        Name: 
      <input type="text" name ='name' value = {this.state.name} onChange = {this.handleChange} />
      </label>
      <label for="date" value = 'Date (mm/dd)'>
        Date:
        <input type="text" name = 'date' value = {this.state.date} onChange = {this.handleChange}/>
      </label>
      <label for="time" value = 'time'>
        Time:
      <input type="text" name = 'time' value = {this.state.time} onChange = {this.handleChange}/>
      </label>
      <label for="numberOfGuests" value = 'Number Of Guests'>
      Number Of Guests:
        <input type="text" name = 'numberOfGuests' value = {this.state.numberOfGuests} onChange = {this.handleChange}/>
      </label>
      <input type="submit" className = 'res-button'value="Make Reservation" onSubmit = {this.handleSubmit}  />
    </form>
  )
}
}
export default ReservationForm
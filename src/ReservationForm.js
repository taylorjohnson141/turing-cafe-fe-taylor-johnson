import React, { Component } from 'react';
class ReservationForm extends Component{
  constructor(props){
    super(props)
  
  this.state = {
    name : '',
    date :'',
    time :'',
    numberOfGuests :''
  }
 
}
createReservation(){
return ({
  name : this.state.name,
    date :this.state.date,
    time :this.state.time,
    number :Number(this.state.numberOfGuests)
})

}
handleChange = (event) =>{
  this.setState({[event.target.name]:event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.addReservation(this.createReservation())
}

render(){
  return (
    <form className = 'form'>
      <label for="Name" value = 'Name'>
        Name: 
      <input type="text" name ='name' value = {this.state.name} onChange = {this.handleChange} />
      </label>
      <label  type ='text' value = 'Date (mm/dd)'>
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
      <input type="submit" className = 'res-button'value="Make Reservation" onClick = {this.handleSubmit}  />
    </form>
  )
}
}
export default ReservationForm
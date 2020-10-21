import React, { Component } from 'react';
import {getReservations} from './apiCalls'
class Reservations extends Component{
  constructor(){
    super()
  
  this.state ={

  }
}
async componentDidMount(){
 let reservations = await getReservations()
 console.log(reservations)
 this.setState({reservations:reservations})
}
formatReservations(){
  if(!this.state.reservations){
    return
  }
  return this.state.reservations.map(reservation =>{
    return (
    <section id = {reservation.id}>
      <h1>{reservation.name}</h1>
  <h2>{reservation.date}</h2>
          <h3>{reservation.time}</h3>
  <h4>{reservation.number}</h4>
      </section>
    )
  })
}
render(){
  if(!this.state){
    return  <article>'Loading'</article>
  }
  return(
  <article className='resy-container'>
     
    {this.formatReservations()}
  </article>
  )
}
}
export default Reservations
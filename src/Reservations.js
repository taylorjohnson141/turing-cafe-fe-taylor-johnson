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
 this.setState({reservations:reservations})
}
formatReservations(){
  return this.state.reservations.map(reservation =>{
    <section id = {reservation.id}>
      <h1>{reservation.name}</h1>
  <h2>{reservation.date}</h2>
          <h3>{reservation.time}</h3>
  <h4>{reservation.number}</h4>
      </section>
  })
}
render(){
  return(
  <article>
     (!this.state && <article>'Loading'</article>)
    {this.formatReservations}
  </article>
  )
}
}
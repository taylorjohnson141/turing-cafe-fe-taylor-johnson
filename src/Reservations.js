import React, { Component } from 'react';
import {getReservations} from './apiCalls'
class Reservations extends Component{
  constructor(props){
    super(props)
  
  this.state ={
    reservations:[]
  }
}
async componentDidMount(){
 let reservations = await getReservations()
 this.setState({reservations:reservations})

}
formatReservations(){

  if(!this.state.reservations.length){
    return
  }
  if(this.props.reservations !== undefined && this.props.reservations.name !== ''){
    this.state.reservations.push(this.props.reservations)
  }
  return this.state.reservations.map(reservation =>{
    return (
    <section className = 'res-card'id = {reservation.id}>
      <h1>Name :{reservation.name}</h1>
  <h2>Date:{reservation.date}</h2>
          <h3>Time:{reservation.time}</h3>
  <h4>Guests:{reservation.number}</h4>
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
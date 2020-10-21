import React from 'react'
import {render, screen} from '@testing-library/react'
import ReservationForm from './ReservationForm'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
describe('Reservation Form', () =>{

  it('should render a form ', () =>{
    render(<ReservationForm reservations ={''} />)
    let form = screen.getByText('Name:')
    expect(form).toBeInTheDocument()
  })
  it('should respond to a click', () =>{
    let addReservation = jest.fn();

    render(<ReservationForm addReservation ={addReservation} />)
    let button = screen.getByDisplayValue("Make Reservation")
    userEvent.click(button)
    expect(addReservation).toBeCalledTimes(1)
  })
  
})
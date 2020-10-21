import React from 'react'
import {render, screen} from '@testing-library/react'
import ReservationForm from './ReservationForm'
import '@testing-library/jest-dom'
describe('ReservationForm', () =>{
  it('should render a form ', () =>{
    render(<ReservationForm reservations ={''} />)
    let form = screen.getAllByText(' Name:')
    expect(form).toBeInTheDocument()
  })
})
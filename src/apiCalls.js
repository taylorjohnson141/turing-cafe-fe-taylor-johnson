export async function getReservations(){
  let response = await fetch('http://localhost:3001/api/v1/reservations')
  let data = response.json()
  return data
}
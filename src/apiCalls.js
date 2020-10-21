export async function getReservations(){
  let response = await fetch('http://localhost:3001/api/v1/reservations'	)
  let data = response.json()
  return data
  
}
export function postReservation(body){
  return fetch('http://localhost:3001/api/v1/reservations'	,{
  method:'post',
  body:JSON.stringify(body)
  })
  .then(response =>{
    response.json()
  })
  .then(reservation =>{
    return reservation
  })
}
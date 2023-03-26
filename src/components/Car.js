import React from 'react'

function tap(n){
    alert(n)
}

function Car() {
  return (
    <div>
      <h2>who are you?</h2>
      <button onClick={()=>tap('its an alert')}>take a shot</button>
    </div>
  )
}

export default Car

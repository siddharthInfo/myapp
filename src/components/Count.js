import React, { useState } from 'react'

function Count() {
   const [count, setCount] = useState(0)

 {
    return (
      <div>
        <button onClick={()=> setCount(count+1)}>Count{count} </button>
      </div>
    )
  }
}

export default Count

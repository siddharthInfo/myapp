// import React, { Component } from 'react'

// export class PS extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello{this.props.name}</h1>
//       </div>
//     )
//   }
// }

// export default PS 

import React from 'react'

function PS(props) {
  return (
    <div>
      <h1> My name is {props.name} </h1>
    </div>
  )
}

export default PS


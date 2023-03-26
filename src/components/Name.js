import React, { Component } from 'react'

export class name extends Component {
  constructor() {
    super();
    this.state = {
        isLoggedIn:false
    }
  }

  render() {
    if(this.state.isLoggedIn){
    return (
      <div>
        logged in
      </div>
    )
  }
  else {
    return (<div>not logged in</div>)
     }  
}
}
export default name

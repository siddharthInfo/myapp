import React, { Component } from 'react'

export class Conditional_Rendering extends Component {
    constructor(props){
    super(props)

     this.state = {
        isLoggedIn:true
     }
    }
    
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
              Welcome user
            </div>
          )
    }
    else{
        return (<div> Please sign in</div>)
    }
    
  }
}

export default Conditional_Rendering

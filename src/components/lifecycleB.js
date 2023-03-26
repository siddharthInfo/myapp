import React, { Component } from 'react'

export class lifecycleB extends Component {

    // deleteComp= () => {
        componentWillUnmount(){
           alert('The component is going to be unmounted');
        }
//   }
  render() {
    return (
      <div>
        (
            <div>
                <h1>Hello Lifecycle B</h1>
            </div>
        )
      </div>
    )
  }
}

export default lifecycleB


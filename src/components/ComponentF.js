import React, { Component } from 'react'
import {UserConsumer} from './UserContext'
import ReactDOM from 'react-dom/client';
class ComponentF extends Component {
  render() {
    return (
      
        <UserConsumer>
            {
                userName=>{
                    return <div><h2>Hello {userName}</h2></div>
                }
            }
        </UserConsumer>
      
    )
  }
}

export default ComponentF

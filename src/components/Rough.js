import React, { Component } from 'react'

export class Rough extends Component {
    constructor() {
        super();
        this.state={
            message:'I am awesome'
        }
    }

    changeStatee(){
        this.setState ({
            message:'I am super Human'
        })
    }


  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
         <button onClick={()=>this.changeStatee()}>click</button>
       
      </div>
    )
  }
}

export default Rough



export class Rough1 extends Component {
    constructor() {
        super();
        this.state({
            count:0
        })
       }
       increment(){
        this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count)
      }
      decrement(){
        this.setState({
            count : this.state.count-1
        })
        console.log(this.state.count)
      }
    
    
    
      render() {
        return (
          <div>
            <div>{this.state.count}</div>
            <button onclick={()=>this.increment()}>Increment</button>
            <button onclick={()=>this.decrement()}>Decrement</button>
            
          </div>
        )
      }
}

// export default Rough1


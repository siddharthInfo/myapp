import React, { Component } from 'react'

export class Calling extends Component {
   constructor(){
    super();
    this.state = {
        message:'welcome visitor'
    }
   }
   changeState() {
      this.setState({
        message:'thank you for subscribing'
    })
   }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.changeState()}>Click</button>
    
      </div>
    )
  }
}

// export default Calling;



export class calling1 extends Component {
  constructor(){
    super() 
    this.state={
      count:0
    }
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.count)
  }
  decrement(){
    this.setState({
      count:this.state.count-1
    })
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
       <div> count={this.state.count}</div>
       <button onClick={
          ()=>this.increment()
       }>Increment</button>
       <button onClick={
        ()=>this.decrement()
       }>Decrement</button>
      </div>
    )
  }
}

export default calling1;


import React, { Component } from 'react'
import lifecycleB from './lifecycleB'

export class lifecycleA extends Component {
    constructor(props){
    super(props)

    this.state = {
        name: 'Anybody'
    }
    console.log('Lifecycle A constructor')
}
   
static getDerivedStateFromProps(props,state){

    console.log('getDerivedStateFromProps')
    return null
}
 componentDidMount(){
    console.log('LifecycleA componentDidMount')
 }   



       shouldComponentUpdate(){
         console.log('LifecycleA shouldComponentUpdate')
    return true
 }
       getSnapshotBeforeUpdate(preyProps,preState){
            console.log('Lifecycle A getsnapshot')
              return null
       }
       componentDidUpdate(){
        console.log('LifeCycleA didUpdate')
       }
       changeState = () =>{
        this.setState({
            name:'code changed'
        })
       }
  render() {
    let comp;
    if(this.state.display){
        comp = <lifecycleA></lifecycleA>
    }
    return (
      <div>{comp}
      <button onClick={this.state}>Delete the Component</button>
        <lifecycleB></lifecycleB>
      </div>
    )
  }
}

export default lifecycleA

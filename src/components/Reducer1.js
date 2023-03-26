import React,{useReducer} from 'react'
import './Reducer1.css'

const initialState = 'SUBSCRIBE';
const newState = 'UNSUBSCRIBE';
const reducer = (state,action) =>{
    if(action.type==="SUBSCRIBE"){
     return initialState;
    }
    else if(action.type==="UNSUBSCRIBE"){
      return newState;
    }
    return state;
}
const  Reducer1 =()=> {

   const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <p className="tel">{state}</p>
      <button className="col" onClick={()=>dispatch({type: "SUBSCRIBE"})}>subscribe</button>
      <button className="col" onClick={()=>dispatch({type: "UNSUBSCRIBE"})}>unsubscribe</button>
    </div>
  )
  }

export default Reducer1

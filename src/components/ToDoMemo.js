import React ,{useState} from 'react';
import MemoComp from './MemoComp';

function ToDoMemo(){
    const[count, setCount] = useState(0);
    const[todos, setTodos]  = useState(['Reading', 'writing']);

   const increment = () => {
    setCount((c)=> c+1);
    setTodos((t)=>["sleeping", "Jogging","walking","jogging"])
   
   }

   const decrement = () => {
    setCount((c)=> c-1);
    setTodos((t)=>["Resting","sleeping"])
   
   }
  return(<div>
    <MemoComp todos = {todos}></MemoComp>
    <hr></hr>
    <div>Count:{count}
    <br></br>
    <button onClick = {increment}>increment</button>
    <br></br>
    <button onClick={decrement}>Decrement</button>
  </div>
  </div>
  )

}
export default ToDoMemo
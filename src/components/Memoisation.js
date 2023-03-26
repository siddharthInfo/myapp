import React,{useState,useMemo} from 'react'

function Memoisation() {
    const [number ,setNumber] =useState(0);
    const squared = useMemo(()=>{return square(number)},[number]);
    const [counter,setCounter]=useState(0);
    const changehandler = (e)=>{
        setNumber(e.target.value);
    }
    const counterhandler=()=>{
        setCounter(counter+1);
    }
    function square(number){
        console.log('number')
        return Math.pow(number,2)
    }


  return (
    <div>
      <input type="number" placeholder="Enter a number" value={number} onChange={changehandler}></input>
      <div>Output: {squared}</div>
      <button onClick={counterhandler}>Counter++</button>
      <div>Counter:{counter}</div>
    </div>
  )
}

export default Memoisation

import React ,{useState,useCallback}from 'react'

var fcount = new Set();

function UseCallback() {
    const[count,setCount] = useState(0)
    const[number,setNumber] = useState(0)
    const incCounter = useCallback(()=>{setCount(count+1)},[count])
    const decCounter = useCallback(()=>{setCount(count-1)},[count])
    const incNumber = useCallback(()=>{setCount(number+1)},[number])
    fcount.add(incCounter)
    fcount.add(decCounter)
    fcount.add(incNumber)
    alert(fcount.size)
    console.log(fcount);
  return (
    <div>
      Count:{count}<hr></hr>
      <button onClick={incCounter}>Increase Counter</button><br></br>
      <button onClick={decCounter}>Decrease Counter</button><br></br>
      <button onClick={incNumber}>Increase Number</button><br></br>
    </div>
  )
}

export default UseCallback

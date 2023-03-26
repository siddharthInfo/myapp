import React from 'react'
import './Testing_Color.css';


const heading ={
    fontsize: '72px',
    color: 'blue',
    textTransform:'uppercase'
}

function Testing_Color() {
  return (
    <div>
      <p style={{fontSize:'32px',color:'red',fontWeight:'500'}}>My name is Siddharth</p>
      <h1 style = {heading}>heading</h1>
      <h2 className='Testing'>2nd heading</h2>
    </div>
  )
}

export default Testing_Color


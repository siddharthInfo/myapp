import React from 'react'

function MemoComp({todos}) {
    console.log('rendering memo comp ')
  return (
    <div>
      {
        todos.map((todos, index)=> {
         return <p key ={index}>{todos}</p>

        })}
    </div>
  )
}

export default React.memo(MemoComp)

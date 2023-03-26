import React from 'react'

function Listing_Names() {
const person = [{id:1,name:'Reena', age: 30, skill: 'Reactjs'},{id:2,name:'Sid', age: 27, skill: 'Reactjs'},
{id:3,name:'Ben', age: 29, skill: 'Java'}]

const personList = person.map(p=>(<h2>I am {p.name},my age is {p.age} and language is {p.skill}</h2>))

//    other way 

   const names = ['Reena', 'Pooja', 'Sid']
   const nameList = names.map((name, index)=><h2 key={index}>{index},{name}</h2>)

  return (
    <div>
      <div>{nameList}{personList}</div>
    </div>
  )
}

export default Listing_Names

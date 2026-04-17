import React from 'react'
import Person from './person.jsx'

const App = () => {
  const person={
    name: "vishal",
    age:18,
    gmail:"vishal.gmail.com",
    pincode:176215
  }
  const product={
    name:"i-phone-12",
    price:100000,
  }
  return (
 <>
    <div>
      <Person/>
      <h1>name={person.name}</h1>
      <h1>age={person.age}</h1>
      <h1>gmail={person.gmail}</h1>
      <h1>pincode={person.pincode}</h1>
    </div>
    <div>
      <h1>product={product.name}</h1>
      <h1>price={product.price}</h1>
    </div>
    </>
    
  )
}

export default App

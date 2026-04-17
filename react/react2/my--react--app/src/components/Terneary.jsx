import React from 'react'


const Terneary = ({name, age}) => {
  return (
    <div>
    <h1>name={name}</h1>
    <h3>{age > 18 ? <h1>You can drive</h1> : <h1>You can't drive</h1>}</h3>
    </div>
  )
}

export default Terneary

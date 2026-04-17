import React from 'react'

const Andoperstor = ({ name, age, pancard, price }) => {
  return (
    <>
    <div>
      <h1>Name={name}</h1>

      <h3>{age > 18 ? <h1>You can drive</h1> : <h1>You can't drive</h1>}</h3>

      {pancard && (
        <h2>you can open a bank in ourbank</h2>
      )}
    </div>

    <div>
      {pancard && <p>you can open a bank account</p>}
    </div>

    <div>
      {price > 100 && <p>you can buy a phone</p>}
    </div>
    </>
  )
}

export default Andoperstor

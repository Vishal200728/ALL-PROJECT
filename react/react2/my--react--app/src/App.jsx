import React from 'react'
import Terneary from './components/Terneary'
import Andoperstor from './components/Andoperstor'


const App = () => {

  return (
    <>
    <div>
      <Terneary name="vishal" age={20}/>
    </div>
    <div>
      <Andoperstor name="vishal" age={18} pancard={true} price={500}/>
    </div>
    </>
  )
}

export default App

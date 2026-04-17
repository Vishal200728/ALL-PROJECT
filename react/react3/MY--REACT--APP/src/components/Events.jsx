import React from 'react'
import './event.css'

// const Events = () => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div className='container'>
//       <h1>We are learning events</h1>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

const Events = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const addition = (a) => {
    alert(`The addition is ${a + 5}`);
  };

  return (
    <div className='container'>
      <h1>We are learning events</h1>

      <button onMouseOver={handleClick}> Click the button </button>

      <button onClick={() => addition(10)}>Addition</button>
    </div>
  )
}

export default Events


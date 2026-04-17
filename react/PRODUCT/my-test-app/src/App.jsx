// import react from "react";

// const app = () => {
//   const person = {
//     name: "vishal",
//     age: 18,
//     gmail: "vishal.gmail.com",
//     pincode: 176215,
//   }

//   const product = {
//     age: 17,
//   }

//   return (
//     <div>
//       <h1>name={person.name}</h1>
//       <p>Age: {person.age}</p>
//       <p>Gmail: {person.gmail}</p>
//       <p>Pincode: {person.pincode}</p>
//       <h2>{product.age >= 18 ? "adult" : "Minor"}</h2>
//     </div>
//   )
// }

// export default app;

// import { useState } from "react"

// const APP = () => {
//   const [count, setcount] = useState(0)

//   const increaseby1 = () => {
//     setcount((prev) => prev + 1)
//   }

//   const decreaseby1 = () => {
//     setcount((prev) =>(prev > 0 ? prev - 1 : 0))
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseby1}>increaseby1</button>
//       <button onClick={decreaseby1}>decreaseby1</button>
//     </div>
//   )
// }
// export default APP

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// const Home = () => {
//   return <h1>Home Page</h1>;
// };

// const About = () => {
//   return <h1>About Page</h1>;
// };

// const Contact = () => {
//   return <h1>Contact Page</h1>;
// };

// const App = () => {
//   return (
//     <nav>
//       <a href="/">Home</a>
//       <a href="/about">About</a>
//       <a href="/Contact">Contact</a>                                                                                                           
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//       </nav>
//   );
// }

// export default App;

import {useState} from 'react'

const App = () => {
  const [dark, setdark] = useState(false)
  
  const style = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black" ,
    height: "100vh"   
  }
  
  return (
    <div style={style}>
      <h1>Theme Toggle</h1>
      <button onClick={() => setdark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default App
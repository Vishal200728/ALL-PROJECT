import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseBy1 = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseBy1 = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseBy1}>Increase by 1</button>
      <button onClick={decreaseBy1}>Decrease by 1</button>
    </div>
  );
};
  
export default Counter;

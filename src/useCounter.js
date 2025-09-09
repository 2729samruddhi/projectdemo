import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  console.log(increment);
  
  const decrement = () => setCount(count - 1);
  console.log(decrement);
  
  const reset = () => setCount(initialValue);
  console.log(reset);
  

  return { count, increment, decrement, reset };
}

export default useCounter;

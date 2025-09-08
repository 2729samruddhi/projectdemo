import useCounter from "./useCounter";

  
  
  const Counter = ()=>{
    const {count,increment,decrement,reset} = useCounter(3)
   return(
    <div className="gap-2">
      <h2>Counte: {count}</h2>
      <button className="border border-black" onClick={increment}>Increment</button>
      <button className="border border-black" onClick={reset}>Reset</button>
      <button className="border border-black" onClick={decrement}>Decrement</button>
    </div>
   )
  }

  export default Counter;
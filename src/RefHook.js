import React,{useEffect,useState,useRef} from 'react'

const RefHook = () => {
const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // store current count into ref
  });

  return (
    <div>
      <h2>Now: {count}, Before: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RefHook

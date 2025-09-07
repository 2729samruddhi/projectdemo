import React,{ useCallback, useState} from "react"

function CallbackHook (){
  const [count,setCount] = useState(0)

     const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // no dependencies → same function every render

  console.log("App rendered");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});
export default CallbackHook;
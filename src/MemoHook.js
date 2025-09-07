import {  useMemo, useState } from "react"

 function MemoHook(){
    const[count,setCount] = useState(0);
    const[text,setText] = useState("")

    const expendiveValue = useMemo(()=>{
      //  console.log("calculating...");
        return count * 2;
        
    },[count])
    
    return(
  <div className="display-block border border-black w-[400px] p-4">
    <h2>expensive value: {expendiveValue}</h2>
    <button className="border border-black p-1" onClick={()=>setCount(count+1)}>Incremet</button><br/>
     <input className="border border-black mt-2" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
 s </div>
    )
 }
 export default MemoHook
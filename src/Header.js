import React, { useEffect, useState } from 'react'
//also pass props  as ({country}) and use it as {country}
const Header = (props) => {
    const [name,setName] = useState("riya")   //this returns array so variable declare in arr
    //this can be also written as 
    // const name1 = arr[0]
    // const setName = arr[1]
    const [count,setCount] = useState(0);

    useEffect(()=>{
       // console.log("count");
        
    },[count])

    //console.log(count);
    

     const  handleDecrement=()=>{
           setCount(count-1)
     }
     const handleIncrement = ()=>{
        setCount(count+1)
     }
     const handleReset = ()=>setCount(0)
     

  return (
    <><div className=' flex justify-center mt-3 gap-4'>
          <h1>welcome {name} from {props.country}</h1>
          <button className='border-black p-2 bg-red-500' onClick={() => setName("sam")}>click</button>
      </div>
          <div className=' items-center  ml-9'>
           <h1>Count:{count} </h1>
           <div className='gap-4'> 
           <button  className='font-bold bg-green-500 p-2'onClick={handleDecrement}>-</button>
           <button className='font-bold' onClick={handleReset}>reset</button>
           <button className='font-bold bg-green-500 p-2' onClick={handleIncrement}>+</button>
           </div>
            
          </div></>
  )
}

export default Header

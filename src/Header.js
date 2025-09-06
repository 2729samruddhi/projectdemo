import React, { useState } from 'react'
//also pass props  as ({country}) and use it as {country}
const Header = (props) => {
    const [name,setName] = useState("riya")   //this returns array so variable declare in arr

    //this can be also written as 
    // const name1 = arr[0]
    // const setName = arr[1]

  return (
    <div>
      <h1>welcome {name} from {props.country}</h1>
      <button onClick={()=>setName("sam")}>click</button>
    </div>
  )
}

export default Header

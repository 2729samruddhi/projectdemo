import { useState } from "react";

const User = (props)=>{
    const [count] = useState(0)
    return(
        <div className="border border-black w-96">
            <h1 className="font-bold">functional component</h1>
            <h1>Count: {count}</h1>
            <h2>Name:{props.name} </h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: patil27@gamil.com</h4>
        </div>
    )
}
export default User;
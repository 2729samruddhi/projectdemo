import React from "react";
import User from "./User" ;
import UserClass from "./UserClass" 

class About extends React.Component{
    constructor(props){
     super(props)
     console.log("parent Constructor called...");
    }

    componentDidMount(){
        console.log("parent component did mount call...");
    }
    render(){
        console.log("parent Render called...");
        return(
             <div className="mt-5">
         <h2>About Class based component</h2>
          {/* <User name={"samruddhi"} location={"pune"} /><br/> */}
          <UserClass name={"samruddhi"} location={"pune"}/>
        </div>
        )
    }
}
  export default About;
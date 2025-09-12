import User from "./User" ;
import UserClass from "./UserClass" 
  const About = ()=>{
    return(
        <div className="mt-5">
         <h2>About Class based component</h2>
          <User name={"samruddhi"} location={"pune"} /><br/>
          <UserClass name={"samruddhi"} location={"pune"}/>
        </div>
    )
  }
  export default About;
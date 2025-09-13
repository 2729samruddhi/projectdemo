import React from "react";

class UserClass extends React.Component {
    //class based component which is exntends from React.Component and this React.Component is basically part of react library means basically commming from ract packages
    constructor(props){
      super(props)
      //console.log(props);

      this.state= {
        //for fetch data from api we should create one local objedct as userinfo
        userInfo :{
          name: "dummay",
          location: "mumbai",
          avatar_url :"http://dummy"
        }
      }
     // console.log("child constructor called...");
    }

   async componentDidMount(){
          //console.log("child component did mount");
          const data =  await fetch("https://api.github.com/users/2729samruddhi")
          const json = await data.json();
          console.log(json); 

      //using setState we update data or state and again render method is called
          this.setState({
          userInfo : json
          })     
    }
    componentDidUpdate(){
      console.log("update");  
    }
    componentWillUnmount(){
      console.log("component will unmount");
      
    }

  render() {
     // console.log("childe render called...")
    const {name,location} = this.state.userInfo
    console.log(name);
    

    return (
      <div className="border border-black w-96">
        {/* <h2>Count: {count}</h2>
        <button className="border border-black"
         onClick={()=>{
          this.setState({
           count : this.state.count+1
        })}}>
          Count Increse
          </button> */}
        <h2>Name:{name} </h2>
        <h3>Location:{location} </h3>
        <h4>Contact: patil27@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;

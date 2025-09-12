import React from "react";

class UserClass extends React.Component {
    //class based component which is exntends from React.Component and this React.Component is basically part of react library means basically commming from ract packages
    constructor(props){
      super(props)
      console.log(props);

      this.state= {
        count:0
      }
    }

  render() {
    const {name,location,contact} = this.props
    const {count} = this.state
    return (
      <div className="border border-black w-96">
        <h2>Count: {count}</h2>
        <h2>Name:{name} </h2>
        <h3>Location:{location} </h3>
        <h4>Contact: patil27@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;

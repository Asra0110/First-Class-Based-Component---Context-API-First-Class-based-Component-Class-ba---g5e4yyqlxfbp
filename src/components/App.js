import React from "react";

class App extends React.Component {
  state = {
    name: "John Doe",
    enrollmentNo: "12345678",
    age: 34
  };
  // add () {
  //   setState({ age: age + 1 })
  // }
  render() {
    return (
      <>
        <h1>Hello, my name is {this.state.name}</h1>
        <p>
          I am {this.state.age} years old and my enrollment no is {this.state.enrollmentNo}
        </p>
        <button onClick={()=>this.setState({age:this.state.age+1})}>Increment</button>
      </>
    )
  }
}

export default App;

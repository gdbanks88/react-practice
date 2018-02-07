import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';
import TextBox from './TextBox';
// import ReactDOM from './react-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      <div>
        {/* <Greeter 
        name="Geoffrey"
        greeting="What's up bro!"/> */}
        
        <TextBox
        handleChange={(text)=>{
          console.log(text);
          this.setState({
            text: text
          })
        }}
        data= {this.state.text} 
        />
        <TextBox 
        data= {this.state.text}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

submit = () => {
  console.log(this.text.value)
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1 className="test">{this.state.input}</h1>
        <Welcome text="Welcome my Friend" />
        <input type="text" onChange={this.updateInput} value={this.state.input} />
        <input type="email" ref={(input) => this.input = input } />       
       <button onClick= {this.submit}>Show Value</button>
      </div>
    );
  }
}



class Welcome extends React.Component {
  render() {
   const { text } = this.props;
     return(
      <h1 className="App-title">{text}</h1>
      )
  }
}

export default App;

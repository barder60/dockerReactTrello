import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './TodoList';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
};

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
};

componentWillMount() {
    this.callAPI();
};

fruits = ['Apple', 'Mengo', 'Orange', 'Banana', 'Cherry', 'Kiwi'];

  removeFruit(fruits) {
    alert(fruits)
  }

render() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
        {this.fruits.map((item) => (
          <li>
            <button onClick={() => this.removeFruit(item)}>
              Click Here
            </button>
          </li>
        ))}
      </ul>
      <TodoList />
          
          <p className="App-intro">;{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import Login from './components/login';
import HomePage from './components/homePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <HomePage/>
      </div>
    );
  }
}

export default App;

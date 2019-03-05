import React, { Component } from 'react';
import TaskList from './components/TaskList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><h1>Redux Todo</h1></div>
        <TaskList />
      </div>
    );
  }
}

export default App;

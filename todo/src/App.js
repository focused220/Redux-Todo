import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo'

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
        <h1>ToDo List</h1>
        </div>
        <div className='todo-list'>
        <Todo props={this.props} />          
        </div>
      </div>
    );
  }
}

export default App;

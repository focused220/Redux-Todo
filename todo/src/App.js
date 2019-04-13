import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo'

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <div className='todo-list'>
        <Todo props={this.props} />          
        </div>
      </div>
    );
  }
}

export default App;

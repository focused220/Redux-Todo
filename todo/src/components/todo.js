import React from 'react';
import {addToDo, removeToDo} from '../actions/action'
//import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './todo.css'

class Todo extends React.Component{
    state = {
        todo:'',
        completed: false
    }

    handleChanges = e =>{
        e.preventDefault();
       this.setState({todo: e.target.value})
    }

    addToDoItem = e => {
        e.preventDefault();
        this.props.addToDo(this.state.todo)
    }

    removeToDoItem = e =>{
       this.props.removeToDo(e.target.id)        
    }

    render(){        
        return(            
            <div>
                <div className='add-todo'>
                    <form>
                        <input type='text' name='newTodo' value={this.state.todo} 
                        onChange={this.handleChanges}/>
                        <button onClick={this.addToDoItem}>Add Item</button>
                    </form>
                </div>
                <div className='todo-list'>
                {this.props.todoList.map((item, index) => {
                    return(
                    <div className="todo-item" key={index}>
                        <li>{item.todo}</li>
                        <input type='button' value='Completed' onClick={this.removeToDoItem} id={index} 
                        name='completed'/>                     
                    </div>)
                })}
                </div>
            </div>
        )        
    }
}

const mapStateToProps = state => {
    return {
      todoList: state.todoList
    };
  };
  
export default connect(
    mapStateToProps,
    { addToDo, removeToDo } // same as { updateTitle: updateTitle }
  )(Todo);
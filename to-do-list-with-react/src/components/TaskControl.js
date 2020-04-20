import React from 'react';
import ReactDOM from 'react-dom';
import InputTask from './InputTask';
import ListTasks from './ListTasks';
import "./css/to-do-style.css";

class Task extends React.Component{
  constructor(){
    super();
    this.state = {

      list:[],

    }
  }

  deleteTask = (tempList) => this.setState({list:tempList});
  updateTask = (tempList) => this.setState({list:tempList})
  clearList = () => this.setState({list:[]});

  addTask = (givenTask) => {
    let tempList = [];
    tempList = this.state.list;
    let task = { nameTask:givenTask, done:false};
    tempList.push(task);
    this.setState({list:tempList});

  }
  render(){
  return (
        <div className='container'>
          <h1>To Do List</h1>
          <InputTask addTaskFromParent={this.addTask}/>
          <div className='content'>
           <ListTasks deleteTask={this.deleteTask}  updateTask = {this.updateTask} list = {this.state.list}/>
          </div>
          <button className='clear' onClick={this.clearList}>Clear</button>
        </div>

      );
    }
  }
  export default Task;

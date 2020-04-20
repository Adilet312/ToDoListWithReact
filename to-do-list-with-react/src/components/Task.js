import React from 'react';
import ReactDOM from 'react-dom';
import "./css/to-do-style.css";

class Task extends React.Component{
  constructor(){
    super();
    this.state = {
      newtask:'',
      list:[{nameTask:'',done: false}],

    }
  }
  inputData = (event) => this.setState({newtask:event.target.value});

  clearList = () => this.setState({list:[]});

  addTask = () => {
    let tempList = [];
    tempList = this.state.list;
    let task = { nameTask:this.state.newtask, done:false};
    tempList.push(task);
    this.setState({list:tempList});
    this.setState({newtask:''});
  }

  deleteTask = (index) => {
    let tempList = [];
    tempList = this.state.list;
    tempList.splice(index,1)
    console.log(tempList);
    this.setState({list:tempList});
  }

  selectTask = (index) => {
    let tempList = [];
    tempList = this.state.list;
    tempList[index].done = true;
    console.log(tempList[index].done)
    this.setState({list:tempList});
  }

  render(){
    const wholeList = this.state.list.map((e,idx) => <li key={idx} className={false}>
                                                        <input onClick = {() => this.selectTask(idx)} type='checkBox'/>{e.nameTask}<span
                                                        onClick = {() => this.deleteTask(idx)}  className='delete'>X</span>
                                                      </li>);
    return (
      <div className='container'>
        <h1>To Do List</h1>
        <div className='new-task'>
          <input placeholder='Enter a new task' onKeyUp={this.inputData}/>
          <button onClick={this.addTask}>Add</button>
        </div>
        <div className='content'>
          <ul>
            {wholeList}
          </ul>
        </div>
        <button className='clear' onClick={this.clearList}>Clear</button>
      </div>

    );
  }
}
export default Task;

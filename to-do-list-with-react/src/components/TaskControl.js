import React from 'react';
import ReactDOM from 'react-dom';
import "./css/todoStyles.css";


class TaskControl extends React.Component{

  constructor(){
    super();
    this.state = {
      newtask: '',
      listTask: [],
      index:0
    }
  }
  inputData  = (event)  => this.setState({newtask:event.target.value});
  inputIndex = (event) => this.setState({index:Number(event.target.value)});



  addTask = () => {
    let tempList = [];
    tempList = this.state.listTask;
    tempList.push(this.state.newtask );
    this.setState({listTask:tempList});
    this.setState({newtask:''});
  }

  deleteData = () =>  this.setState({listTask:[]});



  deleteById = () =>{
    const tempList = this.state.listTask.filter((e,idx) => this.state.index!=idx);
    this.setState({listTask:tempList});
    this.setState({index:0});
  }
  addById = () => {
    let tempList = [];
    tempList = this.state.listTask;
    tempList.splice(this.state.index,0,this.state.newtask);
    this.setState({listTask:tempList});
    this.setState({newtask:''});
    this.setState({index:0});
  }
  searhByName = () => {
    const  findByName = this.state.listTask.filter((element) => element==this.state.newtask);
    this.setState({listTask:findByName});
    this.setState({newtask:''});
  }
  render(){
    const list = this.state.listTask.map((element,idx) =><li key={idx}><span>{element}</span></li>)
    return(
      <div className='container'>
        <h1 >To Do List</h1>
        <div className='new-task'>
            <input onKeyUp={this.inputData} placeholder='Enter new task' type='text'/>
            <button onClick={this.addTask}>Add task</button>
            <button onClick={this.searhByName}>Search by name</button>
            <button onClick={this.addById}>Add by Id</button>
            <button onClick={this.deleteById}>DeleteById</button>
            <input onKeyUp={this.inputIndex} placeholder='Enter index' type='text'/>
            <button onClick={this.deleteData}>Clear list</button>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    )

  }
}
export default TaskControl;

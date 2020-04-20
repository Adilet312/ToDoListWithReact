import React from 'react';
import ReactDOM from 'react-dom';


class InputTask extends React.Component{
  constructor(){
    super();
    this.state = {
      newtask:'',
    }
  }
  inputData = (event) => this.setState({newtask:event.target.value});
  addTask = () => {
    this.props.addTaskFromParent(this.state.newtask);
    this.setState({newtask:''});
  }
  render(){
    return  <div className='new-task'>
              <input placeholder='Enter a new task' onKeyUp={this.inputData}/>
              <button onClick={this.addTask}>Add</button>
            </div>
  }
}
export default InputTask;

import React from 'react';
import ReactDOM from 'react-dom';

class ListTasks extends React.Component{
  constructor(){
    super();

  }
  deleteTask = (index) => {
    let tempList = [];
    tempList = this.props.list;
    tempList.splice(index,1)
    this.props.deleteTask(tempList);
  }


  updateTask = (index) => {
    let tempList = [];
    tempList = this.props.list;
    tempList[index].done = !tempList[index].done ;
    this.props.updateTask(tempList);
  }

  render(){
    return     <ul>
                {

                  this.props.list.map((e,idx) =>   {
                    let isDone = e.done ? "crossed" : '';
                    return (<li key={idx} className={isDone}><input onClick = {() => this.updateTask(idx)} type='checkBox'/>{e.nameTask}
                                <span onClick = {() => this.deleteTask(idx)}  className='delete'>X</span>
                            </li>)
                          })
                }
              </ul>
  }
}
export default ListTasks;

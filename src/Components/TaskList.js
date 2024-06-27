import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

export default function TaskList({filter}) {
 const tasks= useSelector(state=>state.tasks.tasks);


const filteredTasks=tasks.filter(task=>{
  if (filter==="Done"){return task.isDone}
   else if (filter==="not"){ return !task.isDone}
   else return true
}
)

  return (
    <div className="container">
       {filteredTasks.map(task=>(
        <Task key={task.id} task={task}/>
       ))}
    </div>
  )}

import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addTask } from '../features/taskSlice';
import { nanoid } from 'nanoid';

export default function AddTask() {
 const [taskDescription,setTaskDescription] = useState('');
 const dispatch = useDispatch();

 const handleAddTask=(e)=>{
     e.preventDefault();
    if (taskDescription==="")
        return;

    dispatch(addTask({
        id:nanoid(),
        description:taskDescription,
        isDone:false
    }))
    setTaskDescription('');
 }
  return (
    <form>
        <input type="text" placeholder="Add ToDo" value={taskDescription} 
            onChange={e=> setTaskDescription(e.target.value)}/>
       <button onClick={(e)=>handleAddTask(e)}>Add Task</button>
    </form>
  )
}

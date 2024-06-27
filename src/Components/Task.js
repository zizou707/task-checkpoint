import { useState } from "react";
import { toggle,editTaskDescription } from "../features/taskSlice";
import { useDispatch } from "react-redux";

const Task=({task})=>{
    const [editable,setEditable]=useState(false);
    const [editedDescription,setEditedDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggleTask = ()=>{
        dispatch(toggle({id:task.id}))
    }
    const handleEditTask = ()=>{
        dispatch(editTaskDescription({id:task.id,description:editedDescription}));
        setEditable(false);
    }
    console.log(task.isDone);
  return(
    <div>
        <input type="checkbox" checked={task.isDone} onChange={handleToggleTask} />
       { editable ? (
        <input type="text"
         value={editedDescription}
          onChange={(e)=>setEditedDescription(e.target.value)}
          onBlur={handleEditTask}
          autoFocus/>
         )
        : (
          <span onClick={()=>setEditable(true)}>{task.description}</span>
        )
}
    </div>
  );

}

export default Task


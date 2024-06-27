import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
   name:"tasks",
   initialState:{
    tasks:[],
    filter:"all"
}, 
   reducers:{
      addTask:(state,action)=>{
         state.tasks.push(action.payload)
      },
      toggle:(state,action)=>{
        const {id}= action.payload;
        const task=state.tasks.find(task=>task.id===id);
        if (task) {
            task.isDone =!task.isDone 
        }  
      },
      setFilter:(state,action) =>{
        state.filter=action.payload
      },
      editTaskDescription:(state,action)=>{
        const {id,description}=action.payload;
        const task=state.tasks.find(task=>task.id===id);
        if (task){
            task.description=description
        }
      }
   }
})

export const {addTask,toggle,setFilter,editTaskDescription}=taskSlice.actions;
export default taskSlice.reducer;
import React from "react";
import store from "./features/store"
import { Provider } from "react-redux";
import Task from "./Components/Task";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/Addtask";
import  task from './features/taskSlice'

function App() {

  return (
   <Provider store={store}>
    <Task task={task}/>
    <AddTask />
    <TaskList />
   </Provider> 
  );
}

export default App;
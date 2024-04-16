import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
//import Task from './Components/Task'
import data from './data.json'
import DoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App() {

  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  
/*
  const addTask = (userInput ) => {
    let copy = [...toDoList];

    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  */

  const addTask = (userInput) => {
    // Find the ID of the last task (if any)
    const lastTask = toDoList.length > 0 ? toDoList[toDoList.length - 1] : null;
    let nextId;
  
    // Determine the next ID based on the last task
    if (lastTask) {
      nextId = lastTask.id + 1; // Increment the ID from the last task
    } else {
      nextId = 1; // Start with ID 1 if there are no existing tasks
    }
  
    // Create a new task object with the retrieved or generated ID
    const newTask = {
      id: nextId,
      task: userInput,
      complete: false,
    };

      // Update the state with the new task
  setToDoList([...toDoList, newTask]);
  }
  

  return (
    <div className='App'>
      <Header />
      <ToDoForm addTask={addTask}/>
      <DoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      
    </div>
  )
}

export default App;

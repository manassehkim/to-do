import React, { useState } from 'react';

const ToDoForm = ({ addTask, editTask, editingTask }) => {

    const [ userInput, setUserInput ] = useState('');
    const [editMode, setEditMode] = useState(false); // New state for edit mode

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
          editTask(userInput); // Call edit function for existing task
        } else {
          addTask(userInput); // Call add function for new task
        }
        setUserInput("");
        setEditMode(false); // Reset edit mode after submit
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder={editMode ? "Edit task..." : "Input task..."}/>
            <button type="submit">{editMode ? "Edit Task" : "Add Task"}</button>
        </form>
    );
};

export default ToDoForm;
import React from 'react';
 
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
            <input type="checkbox" key={todo.id + todo.task} checked={todo.complete} onChange={handleClick} id={todo.id} />  {/* Add checkbox with id and checked state */}
            <label htmlFor={todo.id}>{todo.id}. {todo.task}</label> {/* Label for checkbox */}
        </div>
        
   );
};
 
export default ToDo;
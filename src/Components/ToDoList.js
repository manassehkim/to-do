import React from 'react';
import ToDo from './ToDo'
 
const DoList = ({toDoList, handleFilter, handleToggle}) => {
    
   return (
       <div>
        {toDoList.map(todo => {
            return (
                <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
        })}
        <button style={{margin: '20px'}} onClick={handleFilter}>Remove Completed</button>
       </div>
   );
};
 
export default DoList;
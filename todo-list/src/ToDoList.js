import React from 'react'

 const ToDoList = (props) => {

     
    return (
        <>
           <button className="btn" onClick={()=>{props.onSelect(props.id)}}>-</button>
            <li>{props.text}</li>
        </>
    )
};
export default ToDoList;
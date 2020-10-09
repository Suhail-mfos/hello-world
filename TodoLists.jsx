# A Template library of Todo.

import React from 'react';
import './style.css';

const TodoLists = (props) => {
    return (
        <>
            <div className="todo_style">
                <li onClick={() => {
                    props.onSelect(props.id);
                }}> 
                    {props.text}
                </li>
            </div>
        </>
    );
}

export default TodoLists;

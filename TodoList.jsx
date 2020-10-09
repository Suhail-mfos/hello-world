# Todo App Adding and deleting items using React.

import React, { useState } from 'react';
import './style.css';
import TodoLists from './TodoLists';

const TodoList = () =>{
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    };

    const deleteItem = (id) => {
        console.log('deleted');

        setItems((oldItems) =>{
            return oldItems.filter((arrElement, index) =>{
                return id !== index;
            });
        });
    } 

    return(<>
        <div className="main_div">
            <div className="center_div">
                <h1>ToDo List</h1><br/>
                <input 
                    type="text"
                    placeholder='Add an Item'
                    onChange={itemEvent}
                    value={inputList}
                />
                <button className='myButton' onClick={listOfItems}> + </button>   
                <ul>
                    {/* <li>{inputList}</li> */}
                    {Items.map((itemval, index) =>{
                        return <TodoLists 
                            text={itemval}
                            id={index}
                            key={index}
                            onSelect={deleteItem}
                        />
                    })}
                </ul>
            </div>
        </div>
    </>);
};

export default TodoList;

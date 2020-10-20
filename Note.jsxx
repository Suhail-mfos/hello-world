# Note
import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import './style.css';

const Note = (props)=>{
    const deleteNote = () =>{
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className='note'>
                <h1 >{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <Button>
                    <DeleteOutlineIcon 
                        className='deleteIcon'
                        onClick={deleteNote}
                        id={props.id}
                    />
                </Button>
            </div>
        </>
    );
};

export default Note;

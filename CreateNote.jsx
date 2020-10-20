# CreateNote
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props)=>{
    const [expand,setExpand] = useState(false);
    const [note, setNote] = useState({
        title:'',
        content:'',
    });
    const createNote = (event) =>{
        
        const {name, value} = event.target;
        setNote((previousData)=>{
            return {
                ...previousData,
                [name]: value,
            }
        });
        console.log(note);
    };

    const addEvent = ()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };
    const expandIt = ()=>{
        setExpand(true);
    };

    const backToNormal = ()=>{
        setExpand(false);
    };
    return (
        <>
            <div 
                className="main_note"
                onDoubleClick={backToNormal}
            >
                <form>
                {expand?
                    <input 
                        type='text'
                        placeholder='Title' 
                        autoComplete='off'
                        onChange={createNote} 
                        value={note.title}
                        name='title'
                    /> : null}
                    <textarea 
                        onClick={expandIt}
                        
                        rows='' 
                        cols='' 
                        placeholder='Write a note...'
                        onChange={createNote}
                        value={note.content}
                        name='content'
                    ></textarea>
                    {expand?
                    <Button 
                        onClick={addEvent}    
                    >
                        <AddIcon/>
                    </Button> : null}
                    
                </form>
            </div>
        </>
    );
};

export default CreateNote;

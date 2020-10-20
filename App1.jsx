# Note App

import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const App = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note)=>{
        setAddItem((oldData)=>{
            return([...oldData, note]);
        });
    };

    const onDelete = (id) =>{
        setAddItem((oldData) =>
            oldData.filter((currVal, index)=>{
                return index !== id;
            })
        )
    };
    return( 
        <>
            <div>
                <Header />
                <CreateNote passNote={addNote}/>
                {addItem.map((val, index) =>{
                    return<Note 
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem = {onDelete}
                    />
                })}
                <Footer/>
            </div>
        </>
    );
};

export default App;

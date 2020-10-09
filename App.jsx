# New React Development

import React, {useState} from 'react';
import './style.css';

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qualification: "",
        college: "",
    });

    const inputEvent = (event) =>{
        // setFullName(fullName);
        console.log(event.target.value);
        console.log(event.target.name);
        
        const {value, name} = event.target;

        setFullName((preValue) =>{
            // console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            }
        });
    };
    const onSubmits = (event) =>{
        event.preventDefault();
        // alert('form submitted');
        setFullName(fullName);  
        alert('form submitted');  
    };
    return( 
        <div className="main_div">
            <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <p>{fullName.qualification}</p>
                    <input 
                            type="text" 
                            placeholder="Enter Your Name"
                            onChange={inputEvent}
                            name='fname'
                            value={fullName.fname} 
                        />
                    <br/>
                    <input 
                            type="text" 
                            placeholder="Enter Your password"
                            onChange={inputEvent}
                            name='lname'
                            value={fullName.lname} 
                        />
                        <br/>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            onChange={inputEvent}
                            name='email'
                            value={fullName.email} 
                            autoComplete="off"
                        />
                        <br/>
                        <input 
                            type="number" 
                            placeholder="Enter Your Number"
                            onChange={inputEvent}
                            name='phone'
                            value={fullName.phone} 
                        />
                        <br/>
                        <input 
                            type="text" 
                            placeholder="Enter Your Qualification"
                            onChange={inputEvent}
                            name='qualification'
                            value={fullName.qualification} 
                        />
                        <input 
                            type="text" 
                            placeholder="Enter Your University"
                            onChange={inputEvent}
                            name='college'
                            value={fullName.college} 
                        />
                    <br/>        
                    <button className='myButton'type="submit" >Submit me 👍</button>
                </div>
            </form>
        </div>
        );
};

export default App;

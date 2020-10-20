# Header
import React from 'react';
import './style.css';
import logo from './Images/logo.png';


const Header = ()=>{
    return (
        <React.Fragment>
            <div className="header">
                <img src={logo} alt='logo' width='80' height='80'  />
                <h1>SUHAIL KEEP</h1>
            </div>
        </React.Fragment>
    );
};

export default Header;

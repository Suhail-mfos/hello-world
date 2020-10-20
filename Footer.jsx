# Footer
import React from 'react';

// import logo from './Images/logo.png';

const Footer = ()=>{
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <p>Copyright © {year}</p>
            </footer>
        </>
    );
};

export default Footer;

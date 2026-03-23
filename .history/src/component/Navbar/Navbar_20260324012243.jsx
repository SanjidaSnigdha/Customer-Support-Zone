import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto mt-4'>
            <div className='navbar-start'>
                <h1>CS — Ticket System</h1>
            </div>
            <div className='navbar-end justify-between gap-3'>
                <a>Home</a>
                <a>FAQ</a>
                <a>Changelog</a>
                <a>Blog</a>
                <a>Download</a>
                <a>Contact</a>
         <button className='btn'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;
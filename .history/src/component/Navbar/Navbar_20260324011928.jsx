import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className='navbar-start'>
                <h1>CS — Ticket System</h1>
            </div>
            <div className='navbar-middle gap-3'>
                <a>Home</a>
                <a>FAQ</a>
                <a>Changelog</a>
                <a>Blog</a>
                <a>Download</a>
                <a>Contact</a>
            </div>
            <div className='navbar-end'>
                <button className='btn'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;
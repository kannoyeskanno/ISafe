import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar

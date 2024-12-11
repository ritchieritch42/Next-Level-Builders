// Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function NavigationBar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img 
                    alt="Company logo consisting of three blue buildings and the name Next Level Builders" 
                    src='/NL_Horizontal_RGB (1).png' 
                    className='logoImg' 
                />
            </div>
            <nav className='links'>
                {/* Define navigation links */}
                <NavLink to="/" className='link'>
                    Home
                </NavLink>
                <NavLink to="/about" className='link'>
                    About
                </NavLink>
                <NavLink to="/contact" className='link'>
                    Contact Us
                </NavLink>
            </nav>
        </div>
    );
}

export default NavigationBar;

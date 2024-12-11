import React from 'react';
import './Navigation.css';

function NavigationBar() {
    return (
        <div>
            <nav className='navbar'>
                    <a href='./Home.jsx 'className='navbarLink'>
                        Home
                    </a>
                    <a href='./About.jsx' className='navbarLink'>
                        About
                    </a>
                    <a href='./Contact.jsx' className='navbarLink'>
                        Contact Us
                    </a>
            </nav>
        </div>
    );
}

export default NavigationBar;
import React from 'react';
import './Navigation.css';

function NavigationBar() {
    return (
        <div>
            <nav className='navbar'>
                    <a className='navbarLink'>
                        Home
                    </a>
                    <a className='navbarLink'>
                        About
                    </a>
                    <a className='navbarLink'>
                        Contact Us
                    </a>
            </nav>
        </div>
    );
}

export default NavigationBar;
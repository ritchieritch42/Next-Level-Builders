import React from 'react';
import './Navigation.css';

function NavigationBar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img alt="Company logo consisting three blue buildings and the name Next Level Builders" src='./NL_Horizontal_RGB (1).png' className='logoImg'/>
            </div>
            <nav className='links'>
                    <a href='./Home.jsx 'className='link'>
                        Home
                    </a>
                    <a href='./About.jsx' className='link'>
                        About
                    </a>
                    <a href='./Contact.jsx' className='link'>
                        Contact Us
                    </a>
            </nav>
        </div>
    );
}

export default NavigationBar;
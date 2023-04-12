import React, { useState } from 'react';
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#blog">References</a></p>
        </>
    )
}



function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar-container'>
            <p className='navbar-logo-in'>JM</p>
            <div className='navbar-links-container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
            <div className='navbar-menu'>
                {toggleMenu ?
                    <RiCloseLine className='navbar-menu-icon' color='#66fcf1' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line className='navbar-close-icon' color='#66fcf1' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu-ontainer-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar
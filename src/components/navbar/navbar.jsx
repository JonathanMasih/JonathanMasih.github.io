import React, { useState } from 'react';
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Menu = () => {
    return (
        <div className='navbar-container-menu'>
            <p><Link to="home" smooth={true}>Home</Link></p>
            <p><Link to="about" smooth={true}>About</Link></p>
            <p><Link to="experience" smooth={true}>Experience</Link></p>
            <p><Link to="projects" smooth={true}>Projects</Link></p>
            <p><Link to="contact" smooth={true}>Contact</Link></p>
        </div>
    )
}



function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar-container'>
            <a className='narbar-logo' href="https://jonathanmasih.github.io/"><p className='navbar-logo-in'>JM</p></a>
            <div className='navbar-links-container'>

                <p><Link className='navbar-link' to="home" smooth={true}>Home</Link></p>
                <p><Link className='navbar-link' to="about" smooth={true}>About</Link></p>
                <p><Link to="experience" smooth={true}>Experience</Link></p>
                <p><Link className='navbar-link' to="projects" smooth={true}>Projects</Link></p>
                <p><Link className='navbar-link' to="contact" smooth={true}>Contact</Link></p>

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
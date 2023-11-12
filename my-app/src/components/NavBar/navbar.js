import React from 'react';
import "./navbar.css";
import logo from '../../assests/logo.png';
import contactImg from '../../assests/box.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                <Link className='destopMenuListItem'>Home</Link>
                <Link className='destopMenuListItem'>About</Link>
                <Link className='destopMenuListItem'>Portfolio</Link>
                <Link className='destopMenuListItem'>Projects</Link>
            </div>

            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    );
}

export default Navbar;

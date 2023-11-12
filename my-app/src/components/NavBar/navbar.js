
import React from 'react';
import "./navbar.css";
import logo from '../../assests/logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav classroom="navbar">
            <img src="{logo}" alt="logo" className='logo' />
            <div classroom="desktopMenu">
                <Link className='destopMenuListItem'>Home</Link>
                <Link className='destopMenuListItem'>About</Link>
                <Link className='destopMenuListItem'>Portfolio</Link>
                <Link className='destopMenuListItem'>Projects</Link>
            </div>

            <button className='desktopMenuBtn'>
            <img src="" alt="" className="desktopMenuBtn" />
            </button>



        </nav>
    )
}

export default Navbar;

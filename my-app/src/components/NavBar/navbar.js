import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.png";
import contactImg from "../../assests/box.png";
import { Link } from "react-scroll";
// import menu from '../../assests/'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      {/* <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu"> 

                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'>Home</Link>
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='destopMenuListItem'>About</Link> 
                <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className='destopMenuListItem'>Portfolio</Link> 
                 <Link  activeClass='active' to='clien
                ts' spy={true} smooth={true} offset={-100} duration={500}className='destopMenuListItem'>Projects</Link>
            </div> */}
    </nav>
  );
};

export default Navbar;

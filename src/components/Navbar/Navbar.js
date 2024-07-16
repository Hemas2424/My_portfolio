import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import icon from '../../assets/icon.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='Navbar'>
      <Link className='myName' style={{ fontFamily: 'Monotype Corsiva' }}>Hema S</Link>
      
      <div className='desktopMenu'>
        <Link activeClass="active" to="intro" spy={true} offset={-100} className='desktopMenuListItem' smooth={true} duration={500}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} offset={-100} className='desktopMenuListItem' smooth={true} duration={500}>About</Link>
        <Link activeClass="active" to="Projectsec" spy={true} offset={-100} className='desktopMenuListItem' smooth={true} duration={500}>Projects</Link>
        <Link activeClass="active" to="learning" spy={true} offset={-100} className='desktopMenuListItem' smooth={true} duration={500}>Skills</Link>
        <Link activeClass="active" to="contact" spy={true} offset={-100} className='desktopMenuListItem' smooth={true} duration={500}>Contact</Link>
      </div>

      <img src={icon} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} offset={-100} className='listItem' smooth={true} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} offset={-100} className='listItem' smooth={true} duration={500} onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="Projectsec" spy={true} offset={-100} className='listItem' smooth={true} duration={500} onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="learning" spy={true} offset={-100} className='listItem' smooth={true} duration={500} onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="contact" spy={true} offset={-100} className='listItem' smooth={true} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;

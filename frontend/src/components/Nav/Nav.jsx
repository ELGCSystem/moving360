import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { navBarLinks, navAccountLinks, navLinks } from "./NavLinks.js";
import Button from '../Button/Button.jsx';
import logo from './logo-moving360.png';
import './Nav.css';

const NavLink = ({ to, className, children }) => {

    // Obtains full path and compares it to the actual one.
    const path = useResolvedPath(to);
    const isActive = useMatch({ path: path.pathname });

    className = isActive ? `${className} nav__item--active` : "";

    return (
        <li className={`nav__item ${className}`}>
            <Link to={to} className='nav__link'>
                {children}
            </Link>
        </li>
    );
};

const NavLogo = () => (
    <Link to="/" className='nav__logo'>
        <img src={logo} alt="moving360 logo" />
        <h1>Moving360</h1>
    </Link>
);

const DesktopNavBar = () =>  (
    <>
        <ul className='desktop__bar'>
            {
                navBarLinks.map((link) => (
                    <NavLink to={link.to}>
                        {link.content} <FontAwesomeIcon icon={faAngleDown} />
                    </NavLink>
                ))
            }
        </ul>

        <div className='nav__account'>
            {
                navAccountLinks.map((link) => (
                    <Button to={link.to} type={link.type}>
                        {link.content}
                    </Button>
                ))
            }
        </div>
    </>
);

const MobileNavBar = ({ displayClass }) => {

    return (
        <ul 
            className={`mobile__bar ${displayClass}`}>
            {
                navLinks.map((link) => (
                    <NavLink to={link.to}>
                        {link.content}
                    </NavLink>
                ))
            }
        </ul>
    );
}

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    let displayClass = toggle ? "mobile__bar--active" : "";

    const open = <FaBars className='nav__btn' onClick={() => setToggle(prev => !prev)}/>
    const close = <FaTimes className='nav__btn nav__btn--active' onClick={() => setToggle(prev => !prev)}/>

    return (
        <nav>
            <NavLogo />
            {toggle ? close : open}
            <DesktopNavBar />
            <MobileNavBar displayClass={displayClass}/> 
        </nav>
    );
}

export default Nav;
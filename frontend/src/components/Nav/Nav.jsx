import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { navBarLinks, navAccountLinks, navLinks } from "./NavLinks.js";
import { Button, NavLink } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { userSignoutAction } from '../../redux/userDucks.js';
import logo from './logo-moving360.png';
import './Nav.css';

const NavLogo = () => (
    <Link to="/" className='nav__logo'>
        <img src={logo} alt="moving360 logo" />
        <h1>Moving360</h1>
    </Link>
);

const DesktopNavBar = () => {

    const userInfo = useSelector(store => store.user.userInfo);
    const dispatch = useDispatch();

    const signoutHandler = () =>
        dispatch(userSignoutAction());

    return (
        <>
            <ul className='desktop__bar'>
                {
                    navBarLinks.map((link) => (
                        <NavLink to={link.to} className="nav">
                            {link.content} <FontAwesomeIcon icon={faAngleDown} />
                        </NavLink>
                    ))
                }
            </ul>

            <div className='nav__account'>
                {
                    userInfo ? (
                        <>
                            <Button to="/gestion-inmobiliaria">
                                {userInfo.name}
                            </Button>
                            <Button to="/iniciar-sesion" onClick={signoutHandler} type="blue">
                                Cerrar Sesión
                            </Button>
                        </>
                    ) : (
                        <>
                            {
                                navAccountLinks.map((link) => (
                                    <Button to={link.to} type={link.type}>
                                        {link.content}
                                    </Button>
                                ))
                            }
                        </>
                    )
                } 
            </div>
        </>
    );
}

const MobileNavBar = ({ displayClass }) => {

    return (
        <ul 
            className={`mobile__bar ${displayClass}`}>
            {
                navLinks.map((link) => (
                    <NavLink to={link.to} className="nav">
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
        <nav className='nav'>
            <NavLogo />
            {toggle ? close : open}
            <DesktopNavBar />
            <MobileNavBar displayClass={displayClass}/> 
        </nav>
    );
}

export default Nav;
import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavLink = ({ to, children, className }) => {

    // Obtains full path and compares it to the actual one.
    const path = useResolvedPath(to);
    const isActive = useMatch({ path: path.pathname });

    // className = isActive ? `${className}__item--active` : className

    return (
        <li className={`${className}__item`}>
            <Link to={to} className={`${className}__link`}>
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
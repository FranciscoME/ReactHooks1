import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    // navLink a diferencia de nav es que navlink permite saber en que ruta me encuentro y aplicar css 
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </nav>
    )
}

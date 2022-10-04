import React from 'react'; 
import { NavLink } from "react-router-dom"


function NavBar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    )
}

export default NavBar;
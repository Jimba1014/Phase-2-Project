import React from 'react'; 
import { NavLink } from "react-router-dom"
import MusicNote from "../assets/musicNote.png"


function NavBar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/form">Add New Member</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <img src ={MusicNote} alt="music note" id="musicNav"></img>
        </nav>
    )
}

export default NavBar;
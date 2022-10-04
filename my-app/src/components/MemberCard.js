import React from 'react'; 
import { Link } from 'react-router-dom'

function MemberCard({ id, name, instruments, genre, artists, song, memory, link }) {
    return(
       <li className="card">
        <div className="card__content">
            <h1 className="card__title">{name}</h1>
            <Link to={link}>{link}</Link>
            <div className="card__text">
                <p>Instruments that I can Play: {instruments}</p>
                <p>My Favorite Genre of Music: {genre} </p>
                <p>My Favorite Artists: {artists} </p>
                <p>The song that I've benn listening to on repeat: {song}</p>
                <p>My favorite musical memory: {memory}</p>
            </div>
        </div>
        </li>  
    )
}

export default MemberCard;
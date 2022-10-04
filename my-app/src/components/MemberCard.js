import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'

function MemberCard({ id, name, instruments, genre, artists, song, memory, link }) {

    const [isHidden, setIsHidden] = useState(false)

    function handleClick(){
        setIsHidden(prev => !prev)
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }



    return(
       <li className="card">
        <div className="card__content">
            <h1 className="card__title" onClick={handleClick}>{name}</h1>
            <button onClick = {() => openInNewTab(link)}>My Music Account</button>
            <div className="card__text">
                {isHidden ? <div>
                    <p>Instruments that I can Play: {instruments}</p>
                    <p>My Favorite Genre of Music: {genre} </p>
                    <p>My Favorite Artists: {artists} </p>
                    <p>The song that I've benn listening to on repeat: {song}</p>
                    <p>My favorite musical memory: {memory}</p>
                </div> : null}
            </div>
        </div>
        </li>  
    )
}

export default MemberCard;
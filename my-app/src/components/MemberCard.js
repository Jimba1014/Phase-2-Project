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
        <div className="card__content" onClick={handleClick}>
            <h1 className="card__title" >{name}</h1>
            <button id="spotifyButton" onClick = {() => openInNewTab(link)}>My Music Account</button>
            <div className="card__text">
                {isHidden ? <div>
                    <p> <b>Instruments that I can Play:</b> {instruments}</p>
                    <p><b>My Favorite Genre of Music:</b> {genre} </p>
                    <p><b>My Favorite Artists:</b> {artists} </p>
                    <p><b>The song that I've benn listening to on repeat:</b> {song}</p>
                    <p><b>My favorite musical memory:</b> {memory}</p>
                </div> : null}
            
            </div>
        </div>
        </li>  
    )
}

export default MemberCard;
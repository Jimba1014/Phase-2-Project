import React, {useState} from 'react'; 
import { Link } from 'react-router-dom'

function MemberCard({ id, name, instruments, genre, artists, song, memory, link }) {

    const [hidden, setHidden] = useState(false)

    function handleClick(){
        setHidden(prev => !prev)
    }

    
    return(
        <div onClick = {handleClick}>
            <h1>{name}</h1>
            <Link to={link}>{link}</Link>
            <div className='hidden-component'>
                {hidden ?
                <div>
                    <p>Instruments that I can Play: {instruments}</p>
                    <p>My Favorite Genre of Music: {genre} </p>
                    <p>My Favorite Artists: {artists} </p>
                    <p>The song that I've benn listening to on repeat: {song}</p>
                    <p>My favorite musical memory: {memory}</p>
                </div> : null }
            </div>
        </div>
    )
}

export default MemberCard;
import React from 'react'; 

function MemberCard({ id, name, instruments, genre, artists, song, memory, link }) {
    return(
        <div>
            <h1>Name</h1>
            <div>Spotify Link: </div>
            <div className='hidden-component'>
                <p>Instrument that I can Play:</p>
                <p>My Favorite Genre of Music:</p>
                <p>The song that I've benn listening to on repeat:</p>
                <p>My favorite musical memory</p>
            </div>
        </div>
    )
}

export default MemberCard;
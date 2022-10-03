import React from 'react'; 

function Form() {

    
    return(
        <div className="new-member-form">
            <h2>Add New Member</h2>
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="instruments" placeholder="Instruments you play" />
            <input type="text" name="genre" placeholder="Genres you listen to" />
            <input type="text" name="artists" placeholder="Your favorite artists" />
            <input type="text" name="song" placeholder="Your favorite song" />
            <input type="text" name="memory" placeholder="Your favorite music memory" />
            <input type="text" name="link" placeholder="Spotify profile link" />
        </div>
    )
}

export default Form;
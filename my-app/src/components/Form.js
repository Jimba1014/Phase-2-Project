import React, { useState } from 'react'; 

function Form({ addNewMember }) {

    const [name, setName] = useState("")
    const [instruments, setInstruments] = useState("")
    const [genre, setGenre] = useState("")
    const [artists, setArtists] = useState("")
    const [song, setSong] = useState("")
    const [memory, setMemory] = useState("")
    const [link, setLink] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const newMember = {
            name: name,
            instruments: instruments,
            genre: genre,
            artists: artists, 
            song: song,
            memory: memory,
            link: link
        }
        fetch('http://localhost:4000/details', {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMember)
        })
        .then((res) => res.json())
        .then(() => addNewMember(newMember))

        setName("")
        setInstruments("")
        setGenre("")
        setArtists("")
        setSong("")
        setMemory("")
        setLink("")
    }
    
    return(
     <div className="new-member-form">
        <h2>Add New Member</h2>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Your name" />
            <input value={instruments} onChange={(e) => setInstruments(e.target.value)} type="text" name="instruments" placeholder="Instruments you play" />
            <input value={genre} onChange={(e) => setGenre(e.target.value)} type="text" name="genre" placeholder="Genres you listen to" />
            <input value={artists} onChange={(e) => setArtists(e.target.value)} type="text" name="artists" placeholder="Your favorite artists" />
            <input value={song} onChange={(e) => setSong(e.target.value)} type="text" name="song" placeholder="Your favorite song" />
            <input value={memory} onChange={(e) => setMemory(e.target.value)} type="text" name="memory" placeholder="Your favorite music memory" />
            <input value={link} onChange={(e) => setLink(e.target.value)} type="text" name="link" placeholder="Spotify profile link" />
            <button type="submit">Add Member</button>
         </form>  
     </div>
    )
}

export default Form;
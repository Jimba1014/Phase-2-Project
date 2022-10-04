import React from 'react'; 

function Search({search, setSearch}) {
    return(
        <div className="search">
        <label htmlFor="search">Search Members: </label>
        <input 
          type="text"
          id="search"
          placeholder="Type a name or instrument to search..."
          value ={search}
          onChange = {(e) => setSearch(e.target.value)}
        />
      </div>
    )
}

export default Search;
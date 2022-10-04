import React from 'react'; 

function Search() {
    return(
        <div className="search">
        <label htmlFor="search">Search Members:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
        />
      </div>
    )
}

export default Search;
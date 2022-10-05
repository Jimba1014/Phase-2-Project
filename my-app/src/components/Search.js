import React from 'react'; 

function Search({search, setSearch}) {
    return(
        <div className="search">
        <label htmlFor="search">Search Members: </label>
        <input 
          type="text"
          id="search"
          placeholder="Search name or instrument..."
          value ={search}
          onChange = {(e) => setSearch(e.target.value)}
        />
      </div>
    )
}

export default Search;
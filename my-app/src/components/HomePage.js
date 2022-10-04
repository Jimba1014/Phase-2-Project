import React, {useState} from 'react'; 
import MemberCard from './MemberCard';
import Search from './Search';

function HomePage({ details, search, setSearch }) {

    const renderCards = details.map((detail) => {
        return <MemberCard {...detail} key={detail.id}/>
    })

    return(
        <div>
            <Search search={search} setSearch ={setSearch} />
        <div className="cards">
            {renderCards}
        </div>
        </div>
    )
}

export default HomePage;
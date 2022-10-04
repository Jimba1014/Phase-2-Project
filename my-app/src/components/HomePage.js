import React from 'react'; 
import MemberCard from './MemberCard';


function HomePage({ details, search, setSearch }) {

    const renderCards = details.map((detail) => {
        return <MemberCard {...detail} key={detail.id}/>
    })

    return(
        <div className="cards">
            {renderCards}
        </div>
    )
}

export default HomePage;
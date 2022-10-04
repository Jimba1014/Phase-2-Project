import React from 'react'; 
import MemberCard from './MemberCard';
import Search from './Search';

function HomePage({ details }) {

    const renderCards = details.map((detail) => {
        return <MemberCard {...detail} key={detail.id}/>
    })

    return(
        <div>
            <Search />
        <div className="cards">
            {renderCards}
        </div>
        </div>
    )
}

export default HomePage;
import React from 'react'; 
import MemberCard from './MemberCard';

function HomePage() {

    const renderCards = memberDetails.map((memberDetail) => {
        <MemberCard {...memberDetail} key={memberDetail.id}/>
    })

    return(
        <div>
            {renderCards}
        </div>
    )
}

export default HomePage;
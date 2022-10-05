import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import SingleEight from '../assets/eighth.png'

function MemberCard({ id, name, link, detail }) {

    const [currentDetail, setCurrentDetail] = useState([])
    const history = useHistory();
   

    function handleClick(){
        setCurrentDetail(detail)
            history.push({
                pathname: '/details',
                state: {test: detail}
            })
        }


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <li className="card">
         <div className="card__content">
             <h1 className="card__title" >{name}</h1>
             
             <div className="personButton">
             <button id="spotifyButton" onClick = {() => openInNewTab(link)}>My Music Account</button>
             <button id="showDetails" onClick = {handleClick}>"Show Me Details!"</button>
             </div>
         </div>
         </li>  
     )
 }

export default MemberCard;
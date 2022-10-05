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
<<<<<<< HEAD
             <button id="spotifyButton" onClick = {() => openInNewTab(link)}>My Music Account</button>
             <button id="showDetails" onClick = {handleClick}>Show Me Details!</button>
=======
                <button id="spotifyButton" onClick = {() => openInNewTab(link)}>My Music Account</button>
                <button id="showDetails" onClick = {handleClick}>"Show Me Details!"</button>
>>>>>>> 58c309edebbf071439b94944da003f840d53d171
             </div>
             <img src={SingleEight} alt='singleEight' id="cardNote"></img>
         </div>
         </li>  
     )
 }

export default MemberCard;
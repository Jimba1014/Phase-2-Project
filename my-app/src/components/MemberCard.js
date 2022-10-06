import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import SingleEight from '../assets/eighth.png'

function MemberCard({ handleDecision, id, name, link, detail }) {

    const history = useHistory();
   

    function handleClick(){
            history.push({
                pathname: '/details',
                state: {test: detail}
            })
        }


    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function handleDecision(){
        if (link === ""){
            return window.alert("Sorry but this person doesn't have a music account :( ") 
            }
            else {openInNewTab(link)
            }
        }

    return(
        <li className="card">
         <div className="card__content">
             <h1 className="card__title" >{name}</h1>
             <div className="personButton">
                <button id="spotifyButton" onClick = {() => handleDecision()}>My Music Account</button>
                <button id="showDetails" onClick = {handleClick}>"Show Me Details!"</button>
             </div>
             <img src={SingleEight} alt='singleEight' id="cardNote"></img>
         </div>
         </li>  
     )
 }

export default MemberCard;
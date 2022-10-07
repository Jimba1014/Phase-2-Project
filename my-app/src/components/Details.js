import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import SingleEight from '../assets/eighth.png'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

function Details({ updatedDetails }) {


    const [detail, setDetail] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setDetail(location.state?.test)
    }, [location])

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function handleDecision(){
        if (detail?.link === ""){
            return window.alert("Sorry but this person doesn't have a music account :( ") 
            }
            else {openInNewTab(detail?.link)
            }
        }

    return (
    <div className='row'>
        <div className='column-left'>
            <li className="card">
            <div className="card__content">
                <h1 className="card__title" >{detail?.name}</h1>
                
                <div className="personButton">
                    <button id="spotifyButton" onClick = {() => handleDecision()}>My Music Account</button>
                </div>
                <img src={SingleEight} alt='singleEight' id="cardNote"></img>
                <div className="card__text">
                    <div>
                        <p> <b>Instruments That I Can Play/Have Played: </b> {detail?.instruments}</p>
                        <p><b>My Favorite Genres of Music: </b> {detail?.genre} </p>
                        <p><b>My Favorite Artists:</b> {detail?.artists} </p>
                        <p><b>The Song That I've Been Listening To On Repeat:</b> {detail?.song}</p>
                        <p><b>My Favorite Musical Memory:</b> {detail?.memory}</p>
                    </div>
                </div>
            </div>
            </li> 
            <CommentBox setDetail={setDetail} comments={detail?.comment} id={detail?.id} updatedDetails={updatedDetails}/>
        </div>
        <div className='column-right'>
            <h2>Comment List</h2>
            <CommentList comments={detail?.comment}/>
        </div>
    </div>
    )
}

export default Details;
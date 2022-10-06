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

    return (
    <div className='row'>
        <div className='column-left'>
        <li className="card">
        <div className="card__content">
            <h1 className="card__title" >{detail?.name}</h1>
            
            <div className="personButton">
            <button id="spotifyButton">My Music Account</button>
            </div>
            <img src={SingleEight} alt='singleEight' id="cardNote"></img>
            <div className="card__text">
                <div>
                    <p> <b>Instruments that I can Play:</b> {detail?.instruments}</p>
                    <p><b>My Favorite Genre of Music:</b> {detail?.genre} </p>
                    <p><b>My Favorite Artists:</b> {detail?.artists} </p>
                    <p><b>The song that I've benn listening to on repeat:</b> {detail?.song}</p>
                    <p><b>My favorite musical memory:</b> {detail?.memory}</p>
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
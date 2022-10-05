import React from 'react';

function CommentList({ comments }) {

    return(
        <div className='comment-list'>
            <ul>
            {comments?.map((comment) => {
                return <li className="comment">{comment}</li>
            })}
            </ul>
        </div>
    )
}

export default CommentList;
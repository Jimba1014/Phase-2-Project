import React from 'react';

function CommentList({ comments }) {

    console.log(comments)
    return(
        <div>
            <ul>
            {comments?.map((comment) => {
                return <li>{comment}</li>
            })}
            </ul>
        </div>
    )
}

export default CommentList;
import React, { useState } from 'react';

function CommentBox() {
    const [comment, setComment] = useState("")

    function handleSubmit(e) {
     e.preventDefault();
        
    }

    return (
        <div className="comment-box">
            <h2>Add a comment</h2>
            <form onSubmit={handleSubmit}>
                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" name="comment" placeholder="Add a comment..." />
            </form>
        </div>
    )
}
export default CommentBox;
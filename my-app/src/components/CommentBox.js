import React, { useState } from 'react';

function CommentBox({ comments, id, setDetail, updatedDetails }) {
    const [comment, setComment] = useState("")

    function handleSubmit(e) {
     e.preventDefault();
    
        const updatedObject = {
            comment: [...comments, comment]
        }
        
        fetch(` http://localhost:4000/details/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then((res) => res.json())
        .then((data) => {
            setDetail(data)
            updatedDetails(data)
        })
    }

    return (
        <div className="comment-box">
            <h2>Add a comment</h2>
            <form onSubmit={handleSubmit}>
                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" name="comment" placeholder="Add a comment..." />
            <div>
                <button id="submit" type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default CommentBox;
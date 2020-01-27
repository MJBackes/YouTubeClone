import React from 'react';
import './NewCommentInputForm.css';
const NewCommentInputForm = (props) => {
    let newComment = {
        commentId: null,
        userName: "",
        commentBody: "",
        totalLikes: 0,
        parentCommentId: null,
        timeOfPost: null
    };
    var comments = {
        id: props.comments.id,
        comments: props.comments.comments
    };
    return (
        <div id="commentInputForm">
            <form onSubmit={(event) => {
                    event.preventDefault();
                    let now = new Date();
                    newComment.timeOfPost = now.toUTCString();
                    newComment.commentId = comments.id + "-" + (comments.comments.length + 1);
                    comments.comments.push(newComment);
                    props.setComments(comments);
                    clearInputs();
                }}>
                <label>User Name:</label>
                <input type="text" id="userNameInput" onChange={(event) => newComment.userName = event.target.value}/>
                <label>Comment:</label>
                <textarea type="text" id="commentBodyInput" onChange={(event) => newComment.commentBody = event.target.value}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewCommentInputForm;

function clearInputs(){
    document.getElementById("userNameInput").value = "";
    document.getElementById("commentBodyInput").value = "";
}
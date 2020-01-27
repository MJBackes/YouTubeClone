import React from 'react';
import './NewCommentInputForm.css';
const NewCommentInputForm = (props) => {
    let newComment = {
        commentId: null,
        userName: "",
        commentBody: "",
        totalLikes: 0,
        parentCommentId: props.replyingTo,
        timeOfPost: null
    };
    var comments = {
        id: props.comments.id,
        comments: props.comments.comments
    };
    return props.replyingTo == null ? (
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
    ) : 
    (
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
                <div className="commentContainer">
                    <h6 className="commentPostTime">{props.replyingTo.timeOfPost}</h6>
                    <h4 className="userName">{props.replyingTo.userName}</h4>
                    <p className="commentBody">{props.replyingTo.commentBody}</p>
                </div>
                <label>User Name:</label>
                <input type="text" id="userNameInput" onChange={(event) => newComment.userName = event.target.value}/>
                <label>Comment:</label>
                <textarea type="text" id="commentBodyInput" onChange={(event) => 
                {
                    newComment.commentBody = event.target.value;
                }}/>
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
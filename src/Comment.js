import React, {useState, useEffect} from 'react';
import './Comment.css';

const Comment = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    var comments = {
        id: props.comments.id,
        comments: props.comments.comments
    };
    useEffect(() => {
        comments.comments.map( (comment) => {
            if(comment.commentId === props.comment.commentId)
                comment.totalLikes = isLiked ? ++comment.totalLikes : --comment.totalLikes;
        });
        props.setComments(comments);
    }, [isLiked]);
    useEffect(() => {
        comments.comments.map( (comment) => {
            if(comment.commentId === props.comment.commentId)
                comment.totalLikes = isDisliked ? --comment.totalLikes : ++comment.totalLikes;
        });
        props.setComments(comments);
    }, [isDisliked]);
    let replyingTo = comments.comments.filter((comment) => {
        if(comment.commentId === props.comment.parentCommentId)
            return comment;
    });
    return props.comment.parentCommentId == null ? (
        <div className="commentContainer">
            <h6 className="commentPostTime">{props.comment.timeOfPost}</h6>
            <h4 className="userName">{props.comment.userName}</h4>
            <p className="commentBody">{props.comment.commentBody}</p>
            <button className="replyButton" onClick={() => props.setCommentToReplyTo(props.comment)}>Reply</button>
            <button  style={isLiked ? {backgroundColor: "#99ff99"} : {}} className="likeButton" onClick={() => 
            {
                setIsLiked(!isLiked);
                setIsDisliked(false);
            }}>Like</button>
            <span>{props.comment.totalLikes}</span>
            <button style={isDisliked ? {backgroundColor: "#ff9999"} : {}} className="dislikeButton" onClick={() => 
            {
                setIsDisliked(!isDisliked);
                setIsLiked(false);
            }}>Dislike</button>
        </div>
    ) : 
    (
        <div className="commentContainer">
            <div className="commentContainer">
                    <h5>In Reply To:</h5>
                    <h6 className="commentPostTime">{replyingTo[0].timeOfPost}</h6>
                    <h4 className="userName">{replyingTo[0].userName}</h4>
                    <p className="commentBody">{replyingTo[0].commentBody}</p>
            </div>
            <h6 className="commentPostTime">{props.comment.timeOfPost}</h6>
            <h4 className="userName">{props.comment.userName}</h4>
            <p className="commentBody">{props.comment.commentBody}</p>
            <button  className="replyButton" onClick={() => props.setCommentToReplyTo(props.comment)}>Reply</button>
            <button style={isLiked ? {backgroundColor: "#99ff99"} : {}} className="likeButton" onClick={() => 
            {
                setIsLiked(!isLiked);
                setIsDisliked(false);
            }}>Like</button>
            <span>{props.comment.totalLikes}</span>
            <button style={isDisliked ? {backgroundColor: "#ff9999"} : {}} className="dislikeButton" onClick={() => 
            {
                setIsDisliked(!isDisliked);
                setIsLiked(false);
            }}>Dislike</button>
        </div>
    );
}

export default Comment;
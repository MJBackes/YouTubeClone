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
            if(comment.commentId === props.commentId)
                comment.totalLikes = isLiked ? ++comment.totalLikes : --comment.totalLikes;
        });
        props.setComments(comments);
    }, [isLiked]);
    useEffect(() => {
        comments.comments.map( (comment) => {
            if(comment.commentId === props.commentId)
                comment.totalLikes = isDisliked ? --comment.totalLikes : ++comment.totalLikes;
        });
        props.setComments(comments);
    }, [isDisliked]);
    return (
        <div className="commentContainer">
            <h6 className="commentPostTime">{props.comment.timeOfPost}</h6>
            <h4 className="userName">{props.comment.userName}</h4>
            <p className="commentBody">{props.comment.commentBody}</p>
            <button onClick={() => props.setCommentToReplyTo(props.comment)}>Reply</button>
            <button onClick={() => 
            {
                setIsLiked(!isLiked);
                setIsDisliked(false);
            }}>Like</button>
            <span>{props.comment.totalLikes}</span>
            <button onClick={() => 
            {
                setIsDisliked(!isDisliked);
                setIsLiked(false);
            }}>Dislike</button>
        </div>
    );
}

export default Comment;
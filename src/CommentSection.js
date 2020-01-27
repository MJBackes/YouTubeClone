import React, {useState} from 'react';
import Comment from './Comment';
import NewCommentInputForm from './NewCommentInputForm';
import './CommentSection.css';
const CommentSection = (props) => {
    let list = [];
    if(props.comments.comments)
        for(let i = 0; i < props.comments.comments.length; i++){
            list.push(
                <Comment 
                    key={props.comments.comments[i].commentId}
                    timeOfPost={props.comments.comments[i].timeOfPost}
                    userName={props.comments.comments[i].userName}
                    commentBody={props.comments.comments[i].commentBody}
                    setComments={props.setComments}
                    commentId={props.comments.comments[i].commentId}
                    totalLikes={props.comments.comments[i].totalLikes}
                    comments={props.comments}
                />
            );
        }
    return (
        <div id="commentSectionContainer">
            {list}
            <NewCommentInputForm
                setComments={props.setComments}
                comments={props.comments}    
            />
        </div>
    );
}

export default CommentSection;
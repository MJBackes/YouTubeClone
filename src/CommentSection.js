import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import NewCommentInputForm from './NewCommentInputForm';
import './CommentSection.css';
const CommentSection = (props) => {
    const [commentToReplyTo, setCommentToReplyTo] = useState(null);
    useEffect(() => {
        setCommentToReplyTo(null);
    }, [props.comments]);
    let list = [];
    if(props.comments.comments)
        for(let i = 0; i < props.comments.comments.length; i++){
            list.push(
                <Comment 
                    key={props.comments.comments[i].commentId}
                    comment={props.comments.comments[i]}
                    setComments={props.setComments}
                    setCommentToReplyTo={setCommentToReplyTo}
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
                replyingTo = {commentToReplyTo}
            />
        </div>
    );
}

export default CommentSection;
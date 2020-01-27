import React, {useState} from 'react';

const Comment = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIdDisliked] = useState(false);
    return (
        <div className="commentContainer">
            <h6 className="commentPostTime">{props.timeOfPost}</h6>
            <h4 className="userName">{props.userName}</h4>
            <p className="commentBody">{props.commentBody}</p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    );
}

export default Comment;
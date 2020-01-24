import React from 'react';
import './VideoInfo.css';

const VideoInfo = (props) => {
    return (
        <div className="VideoDescription">
            <h3 id="VideoTitle">{props.title}</h3>
            <p id="Description">{props.description}</p>
        </div>
    );
}

export default VideoInfo;
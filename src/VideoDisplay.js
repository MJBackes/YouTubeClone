import React from 'react';
import './VideoDisplay.css';

const VideoDisplay = (props) => {
    return props.video.videoId? (
    <div className="VideoDisplayContainer">
        <iframe 
            className="VideoIFrame"
            title={props.video.title}
            src={`https://www.youtube.com/embed/${props.video.videoId}`}
        >Video</iframe>
    </div>
    ) : (
        <div className="VideoDisplayContainer">
        <iframe 
            className="VideoIFrame"
            title={props.video.title}
        >Video</iframe>
    </div>
    );
}

export default VideoDisplay;
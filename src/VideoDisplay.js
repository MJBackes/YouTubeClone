import React, {useState} from 'react';
import './VideoDisplay.css';

const VideoDisplay = (props) => {
    return(
    <div className="VideoDisplayContainer">
        <iframe 
            className="VideoIFrame"
        >Video</iframe>
    </div>
    );
}

export default VideoDisplay;
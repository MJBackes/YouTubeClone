import React from 'react';
import './RelatedVideo.css';
const RelatedVideo = (props) => {
    return (
        <div 
            className="relatedVideoCard"
        >
            <div className="videoThumbnail">
                <img 
                    alt={props.title} 
                    src={props.thumbnail}
                    onClick={() => props.onClick({
                         videoId:props.videoId,
                         title:props.title,
                         description:props.description
                        })}
                />
            </div>
            <div className="videoTitle">
                <h4 onClick={() => props.onClick(props.videoId)}>{props.title.replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/&amp;/gi,'&')}</h4>
                <h5>{props.channel.replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/&amp;/gi,'&')}</h5>
            </div>
        </div>
    );
}

export default RelatedVideo;
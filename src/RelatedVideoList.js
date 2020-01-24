import React from 'react';
import RelatedVideo from './RelatedVideo';

const RelatedVideoList = (props) => {
    let list = [];
    if(props.results)
        for(let i = 0; i < props.results.items.length; i++){
            let item = props.results.items[i];
            list.push(
                <RelatedVideo 
                    key = {item.id.videoId}
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    description={item.snippet.description}
                    channel={item.snippet.channelTitle}
                    thumbnail={item.snippet.thumbnails.default.url}
                    onClick = {props.onClick}
                />
            );
        }
    return (
        <div id="RelatedVideoListContainer">
            {list}
        </div>
    );
}

export default RelatedVideoList;

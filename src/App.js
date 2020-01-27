import React, {useState, useEffect} from 'react';
import {Youtube} from './APIKeys';
import Navbar from './Navbar';
import VideoDisplay from './VideoDisplay';
import VideoInfo from './VideoInfo';
import RelatedVideoList from './RelatedVideoList';
import CommentSection from './CommentSection';
import axios from 'axios';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [comments, setComments] = useState({});
  const [currentVideo, setCurrentVideo] = useState(
    {
      title:"",
      description:"",
      videoId:""
    });
  
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&type=video&key=${Youtube}`)
        .then(response => {
          setSearchResults(response.data);
          });
  }, [search]);

  useEffect(() => {
    axios.get(`http://localhost:30003/commentThreads?id=${currentVideo.videoId}`)
          .then(response => {
            setComments(response.data[0] ? response.data[0] : {id:currentVideo.videoId, comments: []});
          });
  }, [currentVideo]);

  useEffect(() => {
    console.log("updated comments:");
    console.log(comments);
    if(comments.comments && comments.comments.length > 0)
    axios.put(`http://localhost:30003/commentThreads/${currentVideo.videoId}`, comments);
  }, [comments]);

  return (
    <div className="App">
        <Navbar 
          onSearchSubmit = {(event) => {
            event.preventDefault();
            setSearch(document.getElementById("searchInput").value);
          }}
          />
        <div>
          <div id="VideoAndCommentsContainer">
            <div id="VideoContainer">
                <VideoDisplay video={currentVideo}/>
                <VideoInfo 
                    title={currentVideo.title? currentVideo.title.replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/&amp;/gi,'&') : ""}
                    description={currentVideo.description? currentVideo.description.replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/&amp;/gi,'&') : ""}
                />
            </div>
            <div id="CommentsContainer">
              <h3 id="commentsHeader">Comments</h3>
              <CommentSection 
                comments={comments}
                setComments={setComments}
              />
            </div>
          </div>
          <div id="RelatedVideosContainer">
              <RelatedVideoList 
                results={searchResults}
                onClick={setCurrentVideo}
              />
          </div>
        </div>
    </div>
  );
}

export default App;

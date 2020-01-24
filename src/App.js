import React, {useState, useEffect} from 'react';
import APIKeys from './APIKeys';
import Navbar from './Navbar';
import VideoDisplay from './VideoDisplay';
import VideoInfo from './VideoInfo';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  useEffect(() => {
    console.log(search)
  }, [search]);
  return (
    <div className="App">
        <Navbar 
          onClick = {() => {
            setSearch(document.getElementById("searchInput").value);
          }}
          />
        <div>
          <div id="VideoAndCommentsContainer">
            <div id="VideoContainer">
                <VideoDisplay/>
                <VideoInfo 
                    title="Video"
                    description="asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfadsf"
                />
            </div>
            <div id="CommentsContainer">

            </div>
          </div>
          <div id="RelatedVideosContainer">

          </div>
        </div>
    </div>
  );
}

export default App;

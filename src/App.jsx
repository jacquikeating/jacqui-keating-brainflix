import { useState } from 'react';
import './App.css';
import VideoDetails from '/src/data/video-details.json';
import Header from '/src/components/Header/Header.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';


function App() {
  const [currentVid, setCurrentVid] = useState(VideoDetails[0]);
  
  function switchVideo (selectedVideo) {
    setCurrentVid(selectedVideo);
  }

  return (
    <>
    <Header />
    <VideoPlayer currentVid={currentVid} />
    <Comments currentVid={currentVid} />
    <NextVideos currentVid={currentVid} setCurrentVid={setCurrentVid} switchVideo={switchVideo} />
    </>
  )
}

export default App;

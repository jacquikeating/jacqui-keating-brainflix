import { useState } from 'react';
import './App.scss';
import VideoDetails from '/src/data/video-details.json';
import Header from '/src/components/Header/Header.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoPlayer/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';


function App() {
  const [currentVid, setCurrentVid] = useState(VideoDetails[0]);
  
  function switchVideo (selectedVideo) {
    setCurrentVid(selectedVideo);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <VideoPlayer currentVid={currentVid} />
        <div className="app__info-container">
          <div className="app__left">
            <VideoInfo currentVid={currentVid} />
            <Comments currentVid={currentVid} />
          </div>
          <div className="app__right">
          <NextVideos currentVid={currentVid} setCurrentVid={setCurrentVid} switchVideo={switchVideo} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;

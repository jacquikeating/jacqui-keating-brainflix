import { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoPage.scss';
import VideoDetails from '/src/data/video-details.json';
import Header from '/src/components/Header/Header.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoPlayer/VideoInfo';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';


function App() {
  const [currentVid, setCurrentVid] = useState(VideoDetails[0]);
  const [vidsArr, setVidsArr] = useState([]);
  const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8";
  
  function switchVideo(selectedVideo) {
    setCurrentVid(selectedVideo);
  }

  const fetchVidsArr = async () => {
    try {
      const response = await axios.get(
        `${apiURL}/videos/${apiKey}`
      );
      setVidsArr(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVidsArr();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="selected-video">
        <VideoPlayer currentVid={currentVid} apiURL={apiURL} apiKey={apiKey} />
        <div className="selected-video__details">
            <VideoInfo currentVid={currentVid} />
            <Comments currentVid={currentVid} />
          </div>
      </main>
      <NextVideos currentVid={currentVid} setCurrentVid={setCurrentVid} switchVideo={switchVideo} vidsArr={vidsArr} />
    </div>
  )
}

export default App;
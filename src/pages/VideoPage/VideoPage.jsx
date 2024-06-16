import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoDetails from '/src/components/VideoDetails/VideoDetails.jsx';
import NextVideos from '/src/components/NextVideos/NextVideos.jsx';
import './VideoPage.scss';

const VideoPage = () => {
  const [vidsArr, setVidsArr] = useState([]);
  const { vidId } = useParams();

  const getVidsArr = async () => {
    let response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8");
    setVidsArr(response.data);
  };

  useEffect(() => {
      getVidsArr();
  }, []);

  if (vidsArr.length < 1) {
    return <p>loading...</p>;
  };

  const selectedVidId =  vidId || vidsArr[0].id; 
  
  const filteredVidsArr = vidsArr.filter((vid) => {
      return selectedVidId !== vid.id;
  });

  return (
    <div className="video-page">
      <VideoDetails selectedVidId={selectedVidId} />
      <NextVideos filteredVidsArr={filteredVidsArr} />
    </div>
  );
};

export default VideoPage;
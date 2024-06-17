import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideosEndpoint } from '/src/utils/api-utils.js';
import VideoDetails from '/src/components/VideoDetails/VideoDetails.jsx';
import NextVideos from '/src/components/NextVideos/NextVideos.jsx';
import './VideoPage.scss';

const VideoPage = () => {
  const [vidsArr, setVidsArr] = useState([]);
  const { vidId } = useParams();

  const getVidsArr = async () => {
    try {
      let response = await axios.get(getAllVideosEndpoint());
      setVidsArr(response.data);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
      getVidsArr();
  }, []);

  if (vidsArr.length == 0) {
    return <p className="loading">Loading videos...</p>;
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
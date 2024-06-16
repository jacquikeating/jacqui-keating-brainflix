import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideosEndpoint } from '/src/utils/api-utils.js';
// import VideoDetails from '/src/data/video-details.json';
import VideoDetails from '/src/components/VideoDetails/VideoDetails.jsx';
import NextVideos from '/src/components/NextVideos/NextVideos.jsx';
import './VideoPage.scss';

const VideoPage = () => {
  const [vidsArr, setVidsArr] = useState([]);
  const { vidId } = useParams();
  // const [selectedVid, setSelectedVid] = useState(VideoDetails[0]);


  // function switchVideo(selectedVideo) {
  //     setCurrentVid(selectedVideo);
  // }

  const getVidsArr = async () => {
      try {
          let response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8");
          setVidsArr(response.data);
      } catch (error) {
          console.error(error)
      }
  };

  useEffect(() => {
      getVidsArr();
  }, []);

  if (vidsArr.length < 1) {
    return <p>loading...</p>;
}

  const selectedVidId = "84e96018-4022-434e-80bf-000ce4cd12b8" // || vidsArr[0].id; // "84e96018-4022-434e-80bf-000ce4cd12b8" 

  const filteredVidsArr = vidsArr.filter((vid) => {
      return selectedVidId !== vid.id;
  })

  return (
    <div className="video-page">
      <VideoDetails selectedVidId={selectedVidId} />
      {/* <main className="video-page__main">
        <VideoPlayer selectedVidId={selectedVidId} />
        <div className="video-page__details">
          <VideoInfo selectedVidId={selectedVidId} />
          <Comments selectedVidId={selectedVidId} />
        </div>
      </main> */}
      <NextVideos filteredVidsArr={filteredVidsArr} />
    </div>
  );
}


export default VideoPage;

// function App() {
//   const [currentVid, setCurrentVid] = useState(VideoDetails[0]);
//   const [vidsArr, setVidsArr] = useState([]);
//   const { vidId } = useParams();
//   // const selectedVidId = vidId || vidsArr[0].id;
//   const apiURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
//   const apiKey = "?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8";
  
//   function switchVideo(selectedVideo) {
//     setCurrentVid(selectedVideo);
//   }

//   const fetchVidsArr = async () => {
//     try {
//       const response = await axios.get(
//         `${apiURL}/videos/${apiKey}`
//       );
//       setVidsArr(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchVidsArr();
//   }, []);

//   return (
//     <div className="app">
//       <main className="selected-video">
//         <VideoPlayer currentVid={currentVid} apiURL={apiURL} apiKey={apiKey} />
//         <div className="selected-video__details">
//             <VideoInfo currentVid={currentVid} />
//             <Comments currentVid={currentVid} />
//           </div>
//       </main>
//       <NextVideos currentVid={currentVid} setCurrentVid={setCurrentVid} switchVideo={switchVideo} vidsArr={vidsArr} />
//     </div>
//   )
// }

// export default App;
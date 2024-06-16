import { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoPlayer.scss';
import Video from './Video.jsx';

function VideoPlayer({ currentVid, apiURL, apiKey  }) {
    // const [vidDetails, setVidDetails] = useState(null);

    // const fetchVidDetails = async () => {
    //     try {
    //       const response = await axios.get(
    //         `${apiURL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8/${apiKey}`
    //       );
    //     //   console.log(response.data);
    //       setVidDetails(response.data);
    //       console.log(vidDetails);
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   };
    
    // useEffect(() => {
    // fetchVidDetails();
    // }, []);

    return (
        <section className="video-section">
            <Video currentVid={currentVid} />
        </section>
    )
}

export default VideoPlayer;
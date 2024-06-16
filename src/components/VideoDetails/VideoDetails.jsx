import axios from 'axios';
import { useState, useEffect } from 'react';
import { getSingleVideoDetailsEndpoint } from '/src/utils/api-utils.js';
import VideoPlayer from '/src/components/VideoPlayer/VideoPlayer.jsx';
import VideoInfo from '/src/components/VideoPlayer/VideoInfo.jsx';
import Comments from '/src/components/Comments/Comments.jsx';
import './VideoDetails.scss';

const VideoDetails = ({ selectedVidId }) => {
    const [selectedVid, setSelectedVid] = useState(null);

    const getVidDetails = async(selectedVidId) => {
        try {
            let response = await axios.get(getSingleVideoDetailsEndpoint(selectedVidId));
            setSelectedVid(response.data);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        getVidDetails(selectedVidId);
    }, [selectedVidId]);

    if (selectedVid === null) {
        return <div>loading...</div>;
    }

    return (
        <main className="video-page__main">
            <VideoPlayer selectedVid={selectedVid} />
            <div className="video-page__details">
                <VideoInfo selectedVid={selectedVid} />
                <Comments selectedVid={selectedVid} />
            </div>
        </main>
    );
};

export default VideoDetails;
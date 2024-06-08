import './VideoPlayer.css';
import Video from './Video/Video.jsx';
import VideoInfo from './VideoInfo/VideoInfo.jsx';
import videoDetails from '../../data/video-details.json';

function VideoPlayer() {
    let thisVideo = videoDetails[0];
    return (
        <section className="video-section">
            <Video data={thisVideo} />
            <VideoInfo data={thisVideo} />
        </section>
    )
}

export default VideoPlayer;
import './VideoPlayer.css';
import Video from './Video/Video.jsx';
import VideoInfo from './VideoInfo/VideoInfo.jsx';

function VideoPlayer({ currentVid }) {
    return (
        <section className="video-section">
            <Video data={currentVid} />
            {/* <VideoInfo data={currentVid} /> */}
        </section>
    )
}

export default VideoPlayer;
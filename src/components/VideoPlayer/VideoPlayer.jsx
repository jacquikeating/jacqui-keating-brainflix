import './VideoPlayer.css';
import Video from './Video/Video.jsx';

function VideoPlayer({ currentVid }) {
    return (
        <section className="video-section">
            <Video currentVid={currentVid} />
            {/* <VideoInfo data={currentVid} /> */}
        </section>
    )
}

export default VideoPlayer;
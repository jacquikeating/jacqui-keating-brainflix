import './VideoPlayer.scss';
import Video from './Video/Video.jsx';

function VideoPlayer({ currentVid }) {
    return (
        <section className="video-section">
            <Video currentVid={currentVid} />
        </section>
    )
}

export default VideoPlayer;
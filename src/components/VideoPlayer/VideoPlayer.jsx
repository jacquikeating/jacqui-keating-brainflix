import Video from './Video.jsx';
import './VideoPlayer.scss';

function VideoPlayer({ selectedVid  }) {
    return (
        <section className="video-section">                    
            <Video selectedVid={selectedVid} />
        </section>
    )
}

export default VideoPlayer;
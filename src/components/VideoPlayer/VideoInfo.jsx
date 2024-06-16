import './VideoInfo.scss';
import VideoStats from './VideoStats.jsx';

function VideoInfo({ selectedVid }) {
    return (
        <section className="video-info">
            <h1 className="video-info__title">{selectedVid.title}</h1>
            <VideoStats data={selectedVid} />
            <p className="video-info__description">{selectedVid.description}</p>
        </section>
    )
}

export default VideoInfo;
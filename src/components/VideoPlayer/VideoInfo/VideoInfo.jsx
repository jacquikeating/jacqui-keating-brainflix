import './VideoInfo.scss';
import VideoStats from './VideoStats/VideoStats.jsx';

function VideoInfo({ currentVid }) {
    return (
        <section className="video-info">
            <h1 className="video-info__title">{currentVid.title}</h1>
            <VideoStats data={currentVid} />
            <p className="video-info__description">{currentVid.description}</p>
        </section>
    )
}

export default VideoInfo;
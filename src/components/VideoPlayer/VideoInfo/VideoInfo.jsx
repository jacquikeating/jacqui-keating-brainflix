import './VideoInfo.css';
import VideoStats from './VideoStats/VideoStats.jsx';

function VideoInfo({ data }) {
    return (
        <div className="video-info">
            <h1 className="video-info__title">{data.title}</h1>
            <VideoStats data={data} />
            <p className="video-info__description">{data.description}</p>
        </div>
    )
}

export default VideoInfo;
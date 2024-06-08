import './VideoStats.css';

function VideoStats({ data }) {
    return (
        <div className="video-stats">
            <div className="video-stats__section">
                <p className="video-stats__stat video-stats__stat--channel">{data.channel}</p>
                <p className="video-stats__stat">{data.timestamp}</p>
            </div>
            <div className="video-stats__section">
                <p className="video-stats__stat">{data.views}</p>
                <p className="video-stats__stat">{data.likes}</p>
            </div>
        </div>
    )
}

export default VideoStats;
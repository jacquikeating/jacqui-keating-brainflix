import './VideoStats.css';

function VideoStats({ data }) {
    data.timestamp = new Date(data.timestamp).toLocaleDateString('en-US');
    
    return (
        <div className="video-stats">
            <div className="video-stats__section">
                <p className="video-stats__stat video-stats__stat--channel">By {data.channel}</p>
                <p className="video-stats__stat">{data.timestamp}</p>
            </div>
            <div className="video-stats__section">
                <p className="video-stats__stat">
                    <img src="/src/assets/images/views.svg" className="video-stats__icon" />
                    {data.views}</p>
                <p className="video-stats__stat">
                <img src="/src/assets/images/likes.svg" className="video-stats__icon" />
                    {data.likes}</p>
            </div>
        </div>
    )
}

export default VideoStats;